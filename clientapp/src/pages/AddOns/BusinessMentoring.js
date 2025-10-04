import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, Clock, Bolt, Users, Clipboard, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsCategory } from "../../redux/features/productSlice";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../redux/features/cartSlice";
import styled from "styled-components";
import redStarImg from "../../assets/images/redStar.png";
import CallBackForm from "../../components/forms/CallBackForm";
import redCartImg from "../../assets/images/redCartImg.png";
import defaultImg from "../../assets/images/bannerCart.png";

export default function BusinessMentoringPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.productsCategory);
  const myCart = useSelector((state) => state.cart.cart || []);

  useEffect(() => {
    dispatch(getAllProductsCategory("", 0));
  }, [dispatch]);

  const workshopCategory = products.find(
    (cat) => cat._id === "businessmentoring"
  );

  const handleAddToCart = (info, index) => {
    const productId = `${info._id}_${index}_${info.price}`;
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

  const handleIncrease = (id) => {
    dispatch(getIncreaseCart(id, 1));
  };

  const handleDecrease = (id) => {
    dispatch(getDecreaseCart(id, 1));
  };

  const Container = styled.div``;

  const Title = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    color: #002a36ff;
    margin: 2rem 0px;
  `;

  const Grid = styled.div`
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  `;

  const Card = styled(motion.div)`
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    max-width: 400px;
    margin: 0px auto;
  `;

  const Img = styled.img`
    width: 100%;
    height: 210px;
    object-fit: cover;
  `;

  const Content = styled.div`
    padding: 1.2rem;
  `;

  const Name = styled.h3`
    font-size: 1.4rem;
    color: #222;
    margin: 0;
  `;

  const Price = styled.p`
    font-size: 1.1rem;
    color: #555;
  `;

  const StarWrapper = styled.div`
    display: flex;
    gap: 5px;
    padding: 0.5rem 0;
  `;

  const ActionButtons = styled.div`
    display: flex;
    gap: 0.8rem;
    margin-top: 1rem;
  `;

  const Button = styled.button`
    padding: 0.4rem 1.2rem;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    background-color: crimson;
    color: white;
    cursor: pointer;
  `;

  const QuantityWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      background-color: crimson;
      color: white;
      font-weight: bold;
      border: none;
      padding: 0.3rem 0.7rem;
      border-radius: 6px;
      cursor: pointer;
    }
  `;

  const sectionRef = useRef(null);

  const handleScroll = (e) => {
    e.preventDefault();
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-slate-50 to-sky-50 text-slate-900 antialiased"
      style={{ backgroundColor: "white" }}>
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* HERO */}
        <header className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-amber-400/20 p-3 ring-2 ring-amber-300">
                <Star className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-medium uppercase text-amber-600">
                  Mentoring
                </p>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  Business Mentoring Program
                </h1>
              </div>
            </div>

            <p className="mt-6 text-slate-700 leading-relaxed">
              This isn’t just training — it’s mentorship from someone who’s been
              where you are, built from the ground up, and proven what’s
              possible.
              <br />
              I grew my own driving school from scratch into a
              multi-award-winning business and have supported thousands of
              instructors along the way.
              <br />
              I’m ORDIT-registered and a Fleet-registered trainer, delivering
              driver training both in the UK and internationally. I also work
              with the TTC Group as a Consultant Manager, managing and
              delivering NDORS and Fleet training programmes nationwide.
              <br />
              On social media, I’m dedicated to supporting driving instructors,
              sharing insights, ideas, and encouragement to help them succeed.
              <br />
              Now I want to bring all that experience together — to help you
              grow in your own way.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                onClick={handleScroll}
                className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-5 py-3 rounded-lg font-semibold shadow hover:shadow-md transform hover:-translate-y-1 transition">
                Book your free consultation today
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl p-8 bg-gradient-to-br from-white to-sky-100 shadow-lg">
            <h3 className="text-lg text-slate-800">
              Who I Am —<span style={{ fontWeight: "700" }}>Tommy Sandhu</span>{" "}
              Business Mentor
            </h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              I’m the Director of Smartlearner, a business I built from scratch
              when everyone said it couldn’t be done — and I proved them wrong.
              <br></br>Over the past two decades, I’ve built multiple
              successful, award-winning businesses and helped countless
              professionals do the same. I know what it’s like to start with an
              idea, face setbacks, and wonder how to turn effort into real
              progress — because I’ve lived it.<br></br>
              Now, I use that experience to help business owners like you grow
              faster, avoid the costly mistakes, and build a business that truly
              works for you
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-sky-600 mt-1" />
                <div>
                  <p className="text-sm font-semibold">90min 1-to-1</p>
                  <p className="text-xs text-slate-600">
                    Fortnightly — live or online
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Bolt className="w-5 h-5 text-amber-500 mt-1" />
                <div>
                  <p className="text-sm font-semibold">Practical systems</p>
                  <p className="text-xs text-slate-600">
                    Tested strategies for driving schools
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-emerald-600 mt-1" />
                <div>
                  <p className="text-sm font-semibold">Networking</p>
                  <p className="text-xs text-slate-600">
                    Access to industry contacts
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clipboard className="w-5 h-5 text-indigo-600 mt-1" />
                <div>
                  <p className="text-sm font-semibold">Resources</p>
                  <p className="text-xs text-slate-600">
                    Templates, scripts and tools
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </header>

        <Container style={{ marginTop: "1rem" }}>
          <Grid>
            {workshopCategory?.data?.map((product, index) => {
              const productId = `${product._id}_${index}_${product.price}`;
              const inCart = myCart.find((item) => item.id === productId);
              return (
                <Card
                  key={product._id}
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <Content>
                    <Name>{product.name}</Name>
                    <Price>£ {product.price}</Price>
                    <StarWrapper>
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          src={redStarImg}
                          alt="star"
                          style={{ width: 20, height: 20 }}
                        />
                      ))}
                    </StarWrapper>

                    {inCart ? (
                      <QuantityWrapper>
                        <button onClick={() => handleDecrease(productId)}>
                          -
                        </button>
                        <span>{inCart.count}</span>
                        <button onClick={() => handleIncrease(productId)}>
                          +
                        </button>
                      </QuantityWrapper>
                    ) : (
                      <ActionButtons>
                        <Button onClick={() => handleAddToCart(product, index)}>
                          Book
                        </Button>
                      </ActionButtons>
                    )}
                  </Content>
                </Card>
              );
            })}
          </Grid>
        </Container>

        {/* BENEFITS */}
        <section id="benefits" className="mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-slate-800">
            What You’ll Gain
          </motion.h2>

          <p className="mt-3 text-slate-600 max-w-2xl">
            Clarity, profit control, time back and systems that work — the
            program is built to help you scale, protect your brand and unlock
            new income streams.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Clarity & Direction",
                desc: "No more guessing; a clear plan for your growth",
                icon: <Star className="w-6 h-6 text-amber-500" />,
              },
              {
                title: "Financial Control",
                desc: "Understand your numbers, take control of profits",
                icon: <Bolt className="w-6 h-6 text-emerald-500" />,
              },
              {
                title: "Time Back",
                desc: "Work smarter, not harder, and stop feeling stretched",
                icon: <Clock className="w-6 h-6 text-sky-500" />,
              },
              {
                title: "New Income Streams",
                desc: "Unlock more than one way to earn",
                icon: <Users className="w-6 h-6 text-indigo-500" />,
              },
              {
                title: "Future-Proofing",
                desc: "Build long-term value with an exit plan in mind",
                icon: <Clipboard className="w-6 h-6 text-purple-500" />,
              },
              {
                title: "Growth Systems That Work",
                desc: "Strategies already tested in this industry",
                icon: <CheckCircle className="w-6 h-6 text-amber-600" />,
              },
              {
                title: "Accountability & Motivation",
                desc: "Someone in your corner to push you forward",
                icon: <Users className="w-6 h-6 text-emerald-600" />,
              },
              {
                title: "Leadership & Team Skills",
                desc: "Attract, inspire, and keep the right people",
                icon: <Star className="w-6 h-6 text-sky-600" />,
              },
              {
                title: "Marketing That Cuts Through",
                desc: "Stand out and fill your diary",
                icon: <Clipboard className="w-6 h-6 text-rose-500" />,
              },
              {
                title: "Client Experience Training",
                desc: "Turn learners into raving fans and referrals",
                icon: <Bolt className="w-6 h-6 text-indigo-600" />,
              },
              {
                title: "Confidence in Decisions",
                desc: "Make choices backed by expert guidance",
                icon: <CheckCircle className="w-6 h-6 text-emerald-500" />,
              },
              {
                title: "Networking & Contacts",
                desc: "Doors opened that you can’t open alone",
                icon: <Users className="w-6 h-6 text-amber-500" />,
              },
              {
                title: "Peace of Mind",
                desc: "Stay compliant, reduce risk, and protect your reputation",
                icon: <CheckCircle className="w-6 h-6 text-green-600" />,
              },
            ].map((b, i) => (
              <motion.article
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-5 shadow hover:shadow-lg border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-50 rounded-xl ring-1 ring-slate-100">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{b.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{b.desc}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how"
          className="mt-16 bg-gradient-to-tr from-white/60 to-sky-50 p-8 rounded-2xl shadow-inner">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-slate-800">
            How It Works
          </motion.h2>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-lg font-semibold">Tailored Program</h3>
              <p className="text-sm text-slate-600 mt-2">
                Shaped to your goals and challenges.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-lg font-semibold">1-to-1 Mentoring</h3>
              <p className="text-sm text-slate-600 mt-2">
                90 minutes every fortnight (online or in person).
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-lg font-semibold">Unlimited Support</h3>
              <p className="text-sm text-slate-600 mt-2">
                Message anytime between sessions + exclusive resources.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-lg font-semibold">Exclusive Resources</h3>
              <p className="text-sm text-slate-600 mt-2">
                Get access to my templates, tools, and contacts
              </p>
            </motion.div>
          </div>
        </section>

        {/* TESTIMONIAL / TRUST BAR */}
        <section className="mt-12 flex flex-col md:flex-row items-center gap-6">
          <motion.div className="flex-1 bg-gradient-to-r from-amber-50 to-sky-50 rounded-2xl p-6 shadow-inner">
            <p className="text-slate-700">
              "This is more than training. It’s a partnership to help you grow
              as a person, a leader, and a business owner. Together, we’ll cut
              out the noise, focus on what matters, and build the success you
              want — on your terms. "
            </p>
            <p className="mt-4 font-semibold">
              — Multi-award-winning instructor
            </p>
          </motion.div>
        </section>
        <section
          style={{ maxWidth: "600px", margin: "1rem auto" }}
          ref={sectionRef}>
          <CallBackForm />
        </section>
        {/* CONTACT / CTA */}

        <footer className="mt-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Business Mentoring — ORDIT & Fleet
          Registered
        </footer>
      </div>
    </div>
  );
}
