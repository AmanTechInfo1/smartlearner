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
import { Quote } from "lucide-react";
import bookImg from "../../assets/IMG_3318.JPG";
import tommyImg from "../../assets/IMG_3341.JPG";
import smartlearnerLogo from "../../assets/images/smartlearnerLogo-removebg-preview.png";

import styles from "./BusinessCoaching.module.css";

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

  const testimonials = [
    {
      text: "After illness took me off the road with no income, Tommy helped me rebuild my business and confidence. I achieved more than I ever thought possible.",
      author: "G.O",
    },
    {
      text: "I wanted to grow my driving school, and with Tommy’s guidance I now have 16 franchisees and a thriving business.",
      author: "S.R",
    },
  ];

  return (
    <div style={{ backgroundColor: "yellow", padding: "1.5rem" }}>
      {/* Container */}

      {/* //////////////////////////////////////// */}
      <div className="  bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 overflow-hidden">
        <section className={styles.headerSectionbuss}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }} // start below and invisible
            animate={{ opacity: 1, y: 0 }} // slide up and appear
            transition={{ duration: 0.8, ease: "easeOut" }} // smooth animation
          >
            SMARTLEARNER BUSINESS MENTORING PROGRAM
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}>
            With Tommy Sandhu
          </motion.p>
        </section>
        <div id={styles.ImgSections}>
          <div className="opicity"></div>
          <section className={styles.ImgSections}>
            <img src={tommyImg} alt="" id={styles.bookAuthor} />
            <div>
              <img src={bookImg} alt="" id={styles.smartlearnerauthor} />

              <img src={smartlearnerLogo} alt="" id={styles.smartlearnerLogo} />
            </div>
          </section>
        </div>
        {/* ////////////////////////////////////////////////////// */}
        <div
          className="mt-6 flex flex-col sm:flex-row gap-4"
          style={{ justifyContent: "center" }}>
          <Link
            onClick={handleScroll}
            className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-5 py-3 rounded-lg font-semibold shadow hover:shadow-md transform hover:-translate-y-1 transition">
            Book your free consultation today
          </Link>
        </div>

        {/* //////////////////////////////////////////////// */}
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
        {/* //////////////////////////////////////////////// */}

        <div>
          {" "}
          <section
            className="w-full bg-gray-50 text-gray-800 py-16 px-4 sm:px-8 lg:px-20"
            style={{
              maxWidth: "1200px",
              margin: "0px auto",
              borderRadius: "6px",
              marginTop: "1rem",
            }}>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
                Welcome to the Business Mentoring Program
              </h1>
              <p className="text-lg leading-relaxed text-gray-700">
                This program is designed for driving school owners and
                instructors who want to grow from a one-person operation into a
                successful, scalable business. Over 10 structured modules,
                you’ll receive hands-on mentoring, business tools, and proven
                strategies used to build one of the UK’s most successful driving
                school brands — <strong>SmartLearner</strong>. Each month
                includes two 90-minute 1:1 coaching sessions and access to
                tailored guidance throughout the program.
              </p>
            </motion.div>

            {/* Who is it for */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Who Is This Program For?
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc pl-6">
                <li>
                  Established driving instructors ready to grow their business
                </li>
                <li>New business owners looking for structure and systems</li>
                <li>Franchise operators seeking sustainable expansion</li>
                <li>
                  Instructors who want to transition from self-employed to
                  business owner mindset
                </li>
              </ul>
            </motion.div>

            {/* Program Structure */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Program Structure
              </h2>
              <p className="text-gray-700 mb-4">
                Each module combines practical exercises, real-life mentoring,
                and step-by-step tools designed for growth. You’ll have:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>10 study modules</li>
                <li>2 × 90-minute 1:1 mentoring sessions per month</li>
                <li>Ongoing support via email between sessions</li>
                <li>Tools and templates to systemise your business</li>
              </ul>
            </motion.div>

            {/* 10 Module Overview */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-5xl mx-auto mb-12">
              <h2 className="text-2xl font-semibold text-blue-700 mb-6"></h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-2xl overflow-hidden shadow-md">
                  <thead className="bg-blue-700 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">#</th>
                      <th className="px-4 py-3 text-left">Module</th>
                      <th className="px-4 py-3 text-left">Focus Area</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      ["1", "", ""],
                      ["2", "", ""],
                      ["3", "", ""],
                      ["4", "", ""],
                      ["5", "", ""],
                      ["6", "", ""],
                      ["7", "", ""],
                      ["8", "", ""],
                      ["9", "", ""],
                      ["10", "", ""],
                    ].map(([num, module, focus]) => (
                      <tr key={num} className="hover:bg-blue-50 transition">
                        <td className="px-4 py-3 font-semibold text-blue-700">
                          {num}
                        </td>
                        <td className="px-4 py-3 font-medium">{module}</td>
                        <td className="px-4 py-3 text-gray-600">{focus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div> */}

            {/* //////////////////////////////////////////////////////////// */}
            {/* BENEFITS */}
            <section id="benefits" className="mt-16">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-slate-800">
                10-Module Overview
              </motion.h2>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Setting Your Vision & Foundation",
                    desc: "Clarify your goals and business direction.",
                    icon: <Star className="w-6 h-6 text-amber-500" />,
                  },
                  {
                    title: "Understanding Supply, Demand & Market Shift",
                    desc: "Learn to adapt your business to market conditions.",
                    icon: <Bolt className="w-6 h-6 text-emerald-500" />,
                  },
                  {
                    title: "Money Mastery",
                    desc: "Forecast, manage cash flow, and understand profitability.",
                    icon: <Clock className="w-6 h-6 text-sky-500" />,
                  },
                  {
                    title: "Marketing & Community Engagement",
                    desc: "Grow your presence online and locally.",
                    icon: <Users className="w-6 h-6 text-indigo-500" />,
                  },
                  {
                    title: "Building & Managing a Team",
                    desc: "Recruit, train, and lead a growing team.",
                    icon: <Clipboard className="w-6 h-6 text-purple-500" />,
                  },
                  {
                    title: "Systems & Operations Management",
                    desc: "Streamline operations with scalable systems.",
                    icon: <CheckCircle className="w-6 h-6 text-amber-600" />,
                  },
                  {
                    title: "Branding & Customer Experience",
                    desc: "Build a trusted local brand and customer loyalty.",
                    icon: <Users className="w-6 h-6 text-emerald-600" />,
                  },
                  {
                    title: "Growth Through Partnerships & Expansion",
                    desc: "Explore franchising and collaboration models.",
                    icon: <Star className="w-6 h-6 text-sky-600" />,
                  },
                  {
                    title: "Leadership & Mindset",
                    desc: "Develop confidence and lead your business effectively.",
                    icon: <Clipboard className="w-6 h-6 text-rose-500" />,
                  },
                  {
                    title: "Long-Term Strategy & Legacy Planning",
                    desc: "Create sustainability and a business that outlasts you.",
                    icon: <Bolt className="w-6 h-6 text-indigo-600" />,
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
                        <h4 className="font-semibold text-slate-800">
                          {b.title}
                        </h4>
                        <p className="text-sm text-slate-600 mt-1">{b.desc}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

            {/* Program Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-4xl mx-auto text-gray-700">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Program Benefits
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Learn how to scale your business sustainably</li>
                <li>Create consistent income through systems and structure</li>
                <li>Build a brand that stands out in your local market</li>
                <li>Gain financial clarity and control</li>
                <li>Develop leadership confidence and strategic vision</li>
              </ul>
            </motion.div>
          </section>
          <section className="relative py-20    to-gray-900 overflow-hidden">
            {/* Floating background glow shapes */}
            <motion.div
              className="absolute top-10 left-10 w-48 h-48 bg-blue-500 rounded-full opacity-30 blur-3xl"
              animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-3xl"
              animate={{ y: [0, -20, 0], x: [0, -30, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            />

            <div className="relative max-w-5xl mx-auto text-center px-6">
              <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl font-extrabold text-yellow-400 drop-shadow-lg mb-12">
                What Our Mentored Learners Say
              </motion.h2>

              <div className="grid sm:grid-cols-2 gap-10">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-800/70 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-yellow-400/40 hover:border-yellow-300 transition-all duration-500">
                    <Quote className="w-10 h-10 mx-auto mb-4 text-yellow-300" />
                    <p className="text-lg text-gray-100 italic leading-relaxed">
                      {t.text}
                    </p>
                    <div className="mt-4 font-bold text-yellow-400 text-xl">
                      – {t.author}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <section
            style={{ maxWidth: "600px", margin: "0rem auto" }}
            ref={sectionRef}>
            <CallBackForm />
          </section>
          <footer
            className="mt-10 text-center  text-slate-500"
            style={{ color: "white", fontSize: "1.1rem" }}>
            “The SmartLearner way isn’t just about teaching students — it’s
            about building a business that drives itself.” —{" "}
            <strong>Tommy Sandhu</strong>
          </footer>
        </div>

        {/* ///////////////////////////////////////////////////// */}
      </div>

      {/* /////////////////////////////////////////// */}
    </div>
  );
}
