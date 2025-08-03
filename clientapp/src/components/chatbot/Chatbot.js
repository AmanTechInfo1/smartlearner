import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import socket from "../../utils/socket";
import "./Chatbot.css";
import { IoSend } from "react-icons/io5";
import userImg from "../../assets/images/userImg.jpeg";
import botImg from "../../assets/images/botImg.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getAddToCart } from "../../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [joinedChat, setJoinedChat] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [liveChatInput, setLiveChatInput] = useState("");
  const [sendLiveMail, setSendLiveEmail] = useState("");
  const [emailSetSubmitted, setEmailSetSubmitted] = useState(false);
  const [emailSetSubmitted2, setEmailSetSubmitted2] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [passwordSubmitted, setPasswordSubmitted] = useState(false);

  const getValidSession = () => {
    const saved = localStorage.getItem("sessionData");
    if (saved) {
      const parsed = JSON.parse(saved);
      const now = Date.now();
      if (now < parsed.expiry) {
        return parsed.sessionId;
      } else {
        localStorage.removeItem("sessionData");
      }
    }
    return null;
  };

  const [sessionId, setSessionId] = useState(() => {
    const existing = getValidSession();
    if (existing) return existing;

    const newId = Date.now().toString();
    const expiry = Date.now() + 10 * 60 * 1000; // 10 minutes
    localStorage.setItem(
      "sessionData",
      JSON.stringify({ sessionId: newId, expiry })
    );
    return newId;
  });

  useEffect(() => {
    const sessionData = localStorage.getItem("sessionData");
    if (!sessionData) return;

    const { expiry } = JSON.parse(sessionData);
    const now = Date.now();
    const timeout = expiry - now;

    if (timeout > 0) {
      const timer = setTimeout(() => {
        localStorage.removeItem("sessionData");
        setSessionId(null); // Optional: force rerender or show expired UI
      }, timeout);
      return () => clearTimeout(timer);
    } else {
      localStorage.removeItem("sessionData");
      setSessionId(null);
    }
  }, []);

  const chatEndRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { myCart } = useSelector((state) => state.cart);

  const handleAddToCart = (info, index) => {
    const productId = `${info.id}_${index}_${info.price}`;
    dispatch(
      getAddToCart(
        {
          id: productId,
          count: 1,
          service: info.name,
          price: info.price,
        },
        navigate
      )
    );
  };

  useEffect(() => {
    if (sessionId) {
      socket.emit("joinRoom", { sessionId });
      console.log("✅ Emitted joinRoom for session:", sessionId);
    }
    socket.on("receiveMessage", (msg) => {
      if (msg.sessionId === sessionId) {
        setMessages((msgs) => [...msgs, msg]);
      }
    });
    socket.on("chatEndedAdmin", ({ sessionId }) => {
      if (sessionId) {
        setJoinedChat(false);
        setMessages((prev) => [
          ...prev,
          {
            sender: "admin",
            content: "",
          },
        ]);
      }
    });

    return () => {
      socket.off("receiveMessage");
      socket.off("chatEndedAdmin");
    };
  }, [sessionId]);

  const typeBotMessage = (text = "", delay = 30) => {
    return new Promise((resolve) => {
      if (typeof text !== "string") return resolve();
      let i = 0,
        cur = "",
        msgId = Date.now();
      setMessages((prev) => [
        ...prev,
        { id: msgId, sender: "admin", content: "", typing: true },
      ]);
      const iv = setInterval(() => {
        cur += text[i];
        setMessages((prev) =>
          prev.map((m) => (m.id === msgId ? { ...m, content: cur } : m))
        );
        i++;
        if (i === text.length) {
          clearInterval(iv);
          setMessages((prev) =>
            prev.map((m) => (m.id === msgId ? { ...m, typing: false } : m))
          );
          resolve();
        }
      }, delay);
    });
  };

  const addEmojis = (text = "") =>
    text
      .replace(/subscriptions/gi, "📦 subscription")
      .replace(/order/gi, "🛒 order")
      .replace(/help/gi, "🧑‍💻 help")
      .replace(/live chat/gi, "📞 live chat");

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = {
      sessionId,
      sender: "user",
      content: input,
      email: email,
    };
    socket.emit("sendMessage", userMsg);

    try {
      const { data } = await axios.post(
        "https://api.smartlearner.com/api/chatbot/chat",
        {
          sessionId,
          message: input,
        }
      );
      if (
        typeof data.reply.data === "object" &&
        data.reply.data.type === "productList"
      ) {
        setMessages((prev) => [
          ...prev,
          { sessionId, sender: "admin", content: data.reply.data },
        ]);
      } else {
        await typeBotMessage(addEmojis(data.reply.data || ""));
      }

      setInput("");
      scrollToBottom();

      setIsTyping(true);
    } catch (e) {
      console.error(e);
      await typeBotMessage(
        "we dont have knowledge about it please click Live Chat Button"
      );
    } finally {
      setIsTyping(false);
      scrollToBottom();
    }
  };

  const isValidEmail = (email) => {
    // Simple regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!email.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", content: email }]);
    scrollToBottom();
    setEmail("");
    setIsTyping(true);
    try {
      const { data } = await axios.post(
        "https://api.smartlearner.com/api/chatbot/chat",
        {
          sessionId,
          message: email,
        }
      );
      await typeBotMessage(addEmojis(data.reply.data || ""));
      if (data.reply.message === "Please enter your password to continue.") {
        setEmailSetSubmitted2(true);
        setPasswordRequired(true);
        console.log("🔐 Server replied:", data.reply.message);
      } else if (data.reply.message === "email submitted successfully") {
        setEmailSetSubmitted(true);
        setEmailSubmitted(true);

        setSendLiveEmail(data.reply.email);
      }
      console.log("check", data.reply.email);
    } catch (e) {
      console.error(e);
      await typeBotMessage("Oops, that didn't work. Please try again.");
    } finally {
      setIsTyping(false);
      scrollToBottom();
    }
  };

  // ////////////////////////////////////////////////////////////
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (!password.trim()) {
      alert("Please enter your password.");
      return;
    }

    setMessages((prev) => [...prev, { sender: "user", content: password }]);
    scrollToBottom();
    setPassword("");
    setIsTyping(true);

    try {
      const { data } = await axios.post(
        "https://api.smartlearner.com/api/chatbot/chat",
        {
          sessionId,
          message: password,
          password,
        }
      );

      await typeBotMessage(addEmojis(data.reply.data || ""));

      if (data.reply.message === "email submitted successfully") {
        setPasswordRequired(false);
        setEmailSetSubmitted(true);
        setEmailSubmitted(true);
        setPasswordSubmitted(true);
        setSendLiveEmail(data.reply.email);
      }
    } catch (e) {
      console.error(e);
      await typeBotMessage("Invalid password. Please try again.");
    } finally {
      setIsTyping(false);
      scrollToBottom();
    }
  };

  // /////////////////////////////////////////////////////////

  const handleLiveChatSend = () => {
    if (!liveChatInput.trim()) return;

    const userMsg = {
      sessionId,
      sender: "user",
      content: liveChatInput,
      email: sendLiveMail,
      liveChat: true, // Optional flag to distinguish live chat
    };

    // Send message via socket
    socket.emit("sendMessage", userMsg);

    // Clear input
    setLiveChatInput("");

    scrollToBottom();
  };

  const handleJoinLiveChat = () => {
    console.log("👉 Join Live Chat clicked");

    if (joinedChat) return; // Prevent duplicate joins

    setJoinedChat(true); // Switch to live chat mode

    const userMsg = {
      sessionId,
      sender: "user",
      content: "👉 connecting to admin...",
      email: sendLiveMail,
    };

    console.log("🟡 Emitting newChatRequest with:", sessionId);
    // Send to server via socket
    socket.emit("sendMessage", userMsg);
    socket.emit("newChatRequest", { sessionId, email: sendLiveMail });
    console.log("✅ Emitted newChatRequest");
  };

  const fullText = "Welcome I'm SmartBot. How can I help you?";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 50); // Typing speed in ms
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!sessionId) return;

      try {
        const { data } = await axios.get(
          `https://api.smartlearner.com/api/chatbot/messages/${sessionId}`
        );

        setMessages(data.messages);

        // ✅ Check if user has submitted an email previously
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const userEmailMsg = data.messages.find(
          (msg) => msg.sender === "user" && emailRegex.test(msg.content)
        );

        if (userEmailMsg) {
          setEmail(userEmailMsg.content); // optionally set email state too
        }

        const userEmailMsg2 = data.messages.find(
          (msg) =>
            msg.sender === "user" &&
            (msg.pass === "DBUSER" || msg.joinAs === "guest")
        );

        if (userEmailMsg2) {
          setEmailSubmitted(true);
          setEmailSetSubmitted(true);
        }

        const userEmailMsg3 = data.messages.find((msg) => msg.pass === true);

        if (userEmailMsg3) {
          setEmailSetSubmitted2(true);
          setEmailSubmitted(true);
          setEmailSetSubmitted(true);
        }

        const userEmailMsg4 = data.messages.find((msg) => msg.login === true);

        if (userEmailMsg4) {
          setPasswordSubmitted(true);
          setEmailSubmitted(true);
          setEmailSetSubmitted(true);
        }
      } catch (err) {
        console.error("Error loading previous messages:", err);
      }
    };

    fetchMessages();
  }, [sessionId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chatbot-container">
      <div className="chat-header">
        <div className="chatbotAvtarrImg"></div>
        <p>SmartBot</p>
      </div>

      <div className="chat-messages">
        <iframe src="https://lottie.host/embed/ff516f95-edf4-4ad2-9b38-689c593b4900/FtVJnzvWIt.lottie"></iframe>
        <div className="chat-bubble bot-msg typing-animation">
          👋 {displayedText}
        </div>

        {messages.map((m, idx) => {
          if (!m.content && !m.typing) return null;
          if (
            m.sender === "admin" &&
            typeof m.content === "object" &&
            m.content.type === "productList"
          ) {
            return (
              <div key={idx} className="chat-bubble bot-msg">
                <p>
                  🛍️ Products in <strong>{m.content.category}</strong> category:
                </p>
                <ul className="product-list" style={{ padding: "0px 0.5rem" }}>
                  {m.content.products.map((product, index) => {
                    const productId = `${product.id}_${index}_${product.price}`;
                    const alreadyAdded = (myCart || []).find(
                      (item) => item.id === productId
                    );

                    return (
                      <li key={productId} className="product-item-chatbot">
                        <span>
                          {product.name} - £{product.price}
                        </span>
                        {alreadyAdded ? (
                          <span style={{ color: "green" }}>✅ Added</span>
                        ) : (
                          <button
                            className="bookNow"
                            onClick={() => handleAddToCart(product, index)}>
                            Book
                          </button>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }
          return (
            <div
              key={idx}
              className={`chat-bubble ${
                m.sender === "user" ? "user-msg" : "bot-msg"
              }`}>
              {m.sender === "user" ? (
                <>
                  {" "}
                  <img
                    src={userImg}
                    alt="User"
                    className="avatar user-avatar"
                  />
                  {m.content}
                </>
              ) : (
                <div
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                  {" "}
                  <img src={botImg} alt="Bot" className="avatar bot-avatar" />
                  <p
                    style={{ marginBottom: "0px" }}
                    dangerouslySetInnerHTML={{
                      __html: m.content.replace(/\n/g, "<br />"),
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
        {isTyping && (
          <div className="chat-bubble bot-msg typing">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {!emailSubmitted && !emailSetSubmitted2 && getValidSession() ? (
        // Show email input first
        <form className="chat-input-area" onSubmit={handleEmailSubmit}>
          <input
            placeholder="Enter your text..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
          />
          <IoSend
            onClick={(e) => {
              if (isValidEmail(email)) {
                handleEmailSubmit(e);
              } else {
                alert("Please enter a valid email address.");
              }
            }}
            className="chatBtn"
            style={{ cursor: isValidEmail(email) ? "pointer" : "not-allowed" }}
          />
        </form>
      ) : (
        <>
          {/* Show chatbot input if live chat has NOT been joined */}
          {emailSubmitted && !joinedChat ? (
            <div className="chat-input-area">
              <input
                placeholder="Type your message to SmartBot..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <IoSend onClick={handleSend} className="chatBtn" />
            </div>
          ) : (
            <></>
          )}

          {/* Show live chat input if live chat HAS been joined */}
          {joinedChat && (
            <div className="chat-input-area">
              <input
                placeholder="Type your message to live agent..."
                value={liveChatInput}
                onChange={(e) => setLiveChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLiveChatSend()}
              />
              <IoSend onClick={handleLiveChatSend} className="chatBtn" />
            </div>
          )}

          {/* Always show this button after email is submitted, until joined */}
          {!joinedChat && emailSetSubmitted ? (
            <button className="live-chat-btn" onClick={handleJoinLiveChat}>
              Join Live Chat
            </button>
          ) : (
            <></>
          )}
        </>
      )}
      {passwordRequired && !passwordSubmitted && (
        <form className="chat-input-area" onSubmit={handlePasswordSubmit}>
          <input
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
          />
          <IoSend
            onClick={(e) => {
              if (password.trim()) {
                handlePasswordSubmit(e);
              } else {
                alert("Please enter your password.");
              }
            }}
            className="chatBtn"
            style={{ cursor: password.trim() ? "pointer" : "not-allowed" }}
          />
        </form>
      )}
    </div>
  );
};

export default Chatbot;
