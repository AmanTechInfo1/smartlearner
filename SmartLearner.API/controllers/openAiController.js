const { OpenAI } = require("openai");
const User = require("../models/userModel");
const Paypalorder = require("../models/paypalOrderModel");
const UserSubscription = require("../models/subscriptionModal");
const Product = require("../models/productModel");
const Category = require("../models/categoryModel");
const Plans = require("../models/planUserModel");
const BotChatMessage = require("../models/botChatMessage");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});
const sessionMemory = {};

const saveMessage = async ({ sessionId, sender, content }) => {
  try {
    await BotChatMessage.create({ sessionId, sender, content });
  } catch (err) {
    console.error("Error saving chat message:", err);
  }
};

const chatbot = async (req, res) => {
  const { sessionId, message } = req.body;

  console.log("sduhaiu", sessionId, message);
  await saveMessage({ sessionId, sender: "user", content: message });

  if (!sessionMemory[sessionId]) {
    sessionMemory[sessionId] = { step: "askEmail" };

    // ✅ Check DB for past email submission in this session
    const prev = await BotChatMessage.find({ sessionId });
    const emailMsg = prev.find(
      (m) => m.sender === "user" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.content)
    );

    if (emailMsg) {
      const foundUser = await User.findOne({ email: emailMsg.content });
      if (foundUser) {
        sessionMemory[sessionId] = { step: "chatting", user: foundUser };
        const replyText = `Welcome back ${foundUser.username}! How can I assist you today?`;
        await saveMessage({ sessionId, sender: "admin", content: replyText });
        return res.json({
          reply: {
            message: "session resumed",
            statusCode: 200,
            success: true,
            data: replyText,
          },
        });
      } else {
        sessionMemory[sessionId] = {
          step: "guest",
          guestEmail: emailMsg.content,
        };
        const replyText = `Welcome back ${emailMsg.content}! How can I help you today?`;
        await saveMessage({ sessionId, sender: "admin", content: replyText });
        return res.json({
          reply: {
            message: "session resumed",
            statusCode: 200,
            success: true,
            data: replyText,
          },
        });
      }
    }

    const prompt = "hi ! 👋 Before we begin, Please enter your email";
    await saveMessage({ sessionId, sender: "admin", content: prompt });
    return res.json({
      reply: {
        message: "reply successfully",
        statusCode: 201,
        success: true,
        data: prompt,
      },
    });
  }

  const session = sessionMemory[sessionId];

  if (session.step === "askEmail") {
    const user = await User.findOne({ email: message });
    if (user) {
      session.user = user;
      session.step = "chatting";

      const data = `Welcome  ${user.username}! You can ask about your my  subscription, my purchases, our pruducts or anything else.`;
      await saveMessage({ sessionId, sender: "admin", content: data });
      return res.json({
        reply: {
          message: "email submitted successfully",
          email: message,
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } else {
      session.guestEmail = message;
      session.step = "guest";

      const data = `Welcome ${session.guestEmail}! to smartlearner How can I help you`;

      await saveMessage({ sessionId, sender: "admin", content: data });
      return res.json({
        reply: {
          message: "email submitted successfully",
          email: session.guestEmail,
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    }
  }

  if (session.step === "chatting" && session.user) {
    if (
      message.toLowerCase().includes("my subscription") ||
      message.toLowerCase().includes("purchased packages")
    ) {
      const userSubscription = await UserSubscription.findOne({
        userId: session.user._id,
        isActive: true,
      }).populate("subscriptionId"); // populate the plan details

      let data;

      if (!userSubscription) {
        data = "You do not have any active subscription.";
      } else {
        const plan = userSubscription.subscriptionId;
        data = `Your current subscription is "${plan.planname}" priced at $${plan.price}`;
      }
      await saveMessage({ sessionId, sender: "admin", content: data });
      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,

          data: data,
        },
      });
    }

    if (
      message.toLowerCase().includes("my purchases") ||
      message.toLowerCase().includes("my orders") ||
      message.toLowerCase().includes("order history") ||
      message.toLowerCase().includes("purchased products")
    ) {
      // Fetch all orders using the user's email (not userId)
      const orders = await Paypalorder.find({
        email: session.user.email,
      });

      if (!orders.length) {
        data = "You have no completed orders yet.";
      } else {
        const purchasedItems = orders.flatMap((order) =>
          order.myCart.map(
            (item) => `• ${item.service} (${item.count}) (£ ${item.price})`
          )
        );
        data = `Here are your purchased products: ${purchasedItems.join("\n")}`;
      }

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,

          data: data,
        },
      });
    }
    // Check if user is asking about products
  }

  if (
    message.toLowerCase().includes("driving instructor") ||
    message.toLowerCase().includes("pdi portal") ||
    message.toLowerCase().includes("pdi")
  ) {
    try {
      const categories = await Plans.find({ subCat: "pdi" });
      let data;
      if (!categories.length) {
        data = "No product categories are available at the moment.";
      } else {
        const categoryList = categories
          .map((cat, index) => {
            let link = "";
            const planNameLower = cat.planname;

            if (planNameLower.includes("PDI Part One")) {
              link =
                "https://smartlearner.com/driving-instructor-training-part-one";
            } else if (planNameLower.includes("PDI Part Two")) {
              link =
                "https://smartlearner.com/driving-instructor-training-part-two";
            } else if (planNameLower.includes("PDI Part Three")) {
              link =
                "https://smartlearner.com/driving-instructor-training-part-three";
            } else if (planNameLower.includes("PDI Complete Package")) {
              link =
                "https://smartlearner.com/driving-instructor-training-full-course";
            }

            return `${index + 1}. ${cat.planname} * ${cat.price}${
              link ? `\n🔗<a href="${link}" target="_blank">${link}</a>` : ""
            }`;
          })
          .join("\n");
        data = `🛍️ Here are the available packages categories:\n\n${categoryList}\n\n`;
      }

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (err) {
      console.error("Error fetching categories:", err);
      return res.status(500).json({
        reply: {
          message: "Internal server error",
          statusCode: 500,
          success: false,
          data: "Something went wrong while fetching categories. Please try again later.",
        },
      });
    }
  }

  //
  if (
    message.toLowerCase().includes("theory portal") ||
    message.toLowerCase().includes("theory packages")
  ) {
    try {
      const categories = await Plans.find({ subCat: "theory" });

      let data;

      if (!categories.length) {
        data = "No packages are available at the moment.";
      } else {
        const categoryList = categories
          .map((cat, index) => {
            let link = "";
            const planNameLower = cat.planname;

            if (
              planNameLower.includes("Lifetime Theory Portal Access £30.00")
            ) {
              link = "https://smartlearner.com/Theory-subscription";
            }

            return `${index + 1}. ${cat.planname} * ${cat.price}${
              link ? `\n🔗<a href="${link}" target="_blank">${link}</a>` : ""
            }`;
          })
          .join("\n");
        data = `🛍️ Here are the available packages categories:\n\n${categoryList}\n\n`;
      }

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (err) {
      console.error("Error fetching categories:", err);
      return res.status(500).json({
        reply: {
          message: "Internal server error",
          statusCode: 500,
          success: false,
          data: "Something went wrong while fetching categories. Please try again later.",
        },
      });
    }
  }

  // CATEGORY-BASED PRODUCT SEARCH

  if (
    message.toLowerCase().includes("offers automatic") ||
    message.toLowerCase().includes("manual") ||
    message.toLowerCase().includes("offers manual") ||
    message.toLowerCase().includes("pass plus") ||
    message.toLowerCase().includes("theory support") ||
    message.toLowerCase().includes("automatic") ||
    message.toLowerCase().includes("intensive") ||
    message.toLowerCase().includes("workshop")
  ) {
    const categories = await Category.find({ isDeleted: false });

    const matchedCategory = categories.find((cat) =>
      message.toLowerCase().includes(cat.name.toLowerCase())
    );
    let data;

    if (!matchedCategory) {
      data = `Sorry, we couldn't find any category matching "${message}".`;
    } else {
      const products = await Product.find({
        category: matchedCategory._id,
        isDeleted: false,
      });

      if (!products.length) {
        data = `There are no products currently available in the "${matchedCategory.name}" category.`;
      } else {
        const productList = products.map((product, index) => ({
          id: product._id,
          name: product.name,
          price: product.price,
          index,
        }));

        data = {
          type: "productList",
          category: matchedCategory.name,
          products: productList,
        };
      }
    }

    await saveMessage({ sessionId, sender: "admin", content: data });

    return res.json({
      reply: {
        message: "reply successfully",
        statusCode: 201,
        success: true,
        data: data,
      },
    });
  }
  //////////////////////////////////////////////
  // ✅ New block: Show all available products if message includes "products"
  if (
    message.toLowerCase().includes("products") ||
    message.toLowerCase().includes("product")
  ) {
    try {
      const products = await Category.find({ isDeleted: false });

      let data;

      if (!products.length) {
        data = "There are currently no available products.";
      } else {
        const productList = products.map((product) => `• ${product.name} `);
        data = `Here are our available product categories please choose and search which product you want:\n${productList.join(
          "\n"
        )}`;
      }

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  ///////////////////////////////////////////////

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "GPT‑3.5 Turbo", // fallback if no GPT-4 access
    });
    const responseText = completion.choices[0].message.content;

    await saveMessage({ sessionId, sender: "admin", content: responseText });

    res.json({ reply: responseText });
  } catch (err) {
    console.log("Error", err.stack || err);
    if (err.status === 429) {
      const data =
        "You've reached the usage limit for now. Please try again later or check your OpenAI billing settings.";
      await saveMessage({ sessionId, sender: "admin", content: data });
      return res.json({ reply: data });
    }
    console.error(err);
    res.status(500).json({
      reply:
        "SmartBot do not have knowledge about it please connect to live chat",
    });
  }
};

module.exports = { chatbot };
