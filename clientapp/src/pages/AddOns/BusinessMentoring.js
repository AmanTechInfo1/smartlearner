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

  return (
    <div style={{ backgroundColor: "yellow", padding: "1.5rem" }}>
      {/* Container */}

      {/* //////////////////////////////////////// */}
      <div style={{ backgroundColor: "blue" }}>
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

        <section className={styles.ImgSections}>
          <img src={tommyImg} alt="" id={styles.bookAuthor} />
          <div>
            <img src={bookImg} alt="" id={styles.smartlearnerauthor} />

            <img src={smartlearnerLogo} alt="" id={styles.smartlearnerLogo} />
          </div>
        </section>
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-5xl mx-auto mb-12">
              <h2 className="text-2xl font-semibold text-blue-700 mb-6">
                10-Module Overview
              </h2>
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
                      [
                        "1",
                        "Setting Your Vision & Foundation",
                        "Clarify your goals and business direction.",
                      ],
                      [
                        "2",
                        "Understanding Supply, Demand & Market Shift",
                        "Learn to adapt your business to market conditions.",
                      ],
                      [
                        "3",
                        "Money Mastery",
                        "Forecast, manage cash flow, and understand profitability.",
                      ],
                      [
                        "4",
                        "Marketing & Community Engagement",
                        "Grow your presence online and locally.",
                      ],
                      [
                        "5",
                        "Building & Managing a Team",
                        "Recruit, train, and lead a growing team.",
                      ],
                      [
                        "6",
                        "Systems & Operations Management",
                        "Streamline operations with scalable systems.",
                      ],
                      [
                        "7",
                        "Branding & Customer Experience",
                        "Build a trusted local brand and customer loyalty.",
                      ],
                      [
                        "8",
                        "Growth Through Partnerships & Expansion",
                        "Explore franchising and collaboration models.",
                      ],
                      [
                        "9",
                        "Leadership & Mindset",
                        "Develop confidence and lead your business effectively.",
                      ],
                      [
                        "10",
                        "Long-Term Strategy & Legacy Planning",
                        "Create sustainability and a business that outlasts you.",
                      ],
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
            </motion.div>

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
          <footer
            className="mt-10 text-center  text-slate-500"
            style={{ color: "white", fontSize: "1rem" }}>
            “The SmartLearner way isn’t just about teaching students — it’s
            about building a business that drives itself.” — Tommy Sandhu
          </footer>
        </div>

        {/* ///////////////////////////////////////////////////// */}
      </div>

      {/* /////////////////////////////////////////// */}
    </div>
  );
}
