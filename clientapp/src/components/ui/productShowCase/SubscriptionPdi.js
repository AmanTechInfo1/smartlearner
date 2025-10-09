import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getAllProductsCategory } from "../../../redux/features/productSlice";
import redStarImg from "../../../assets/images/redStar.png";
import { useNavigate } from "react-router-dom"; // Ensure useNavigate is imported
import styled from "styled-components";
import redCartImg from "../../../assets/images/redCartImg.png";
import styles from "./ProductShowCase.module.css";

// Star component to render stars
const StarWrapper = styled.div`
  display: flex;
  gap: 5px;
  padding: 0.5rem 0;
`;

// A reusable product card component
const ProductCard = ({
  title,
  description,
  price,
  imgSrc,
  navigatePath,
  gradientClass,
}) => {
  const navigate = useNavigate(); // Ensure navigate is used correctly inside the card component
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className={`rounded-3xl shadow-xl overflow-hidden  hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br ${gradientClass}`}>
      <div className="relative">
        <img
          src={redCartImg}
          id={styles.redCartImg12}
          alt="productImg"
          className="w-full h-48 object-cover rounded-t-2xl"
        />
      </div>

      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800 mb-1 truncate">
          {title}
        </h4>
        <p className="text-sm text-gray-500 mb-2 line-clamp-2">{description}</p>
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

        <div className="flex items-center justify-between mt-4">
          <span className="text-white-600 font-bold text-md">£ {price}</span>

          <motion.button
            onClick={() => navigate(navigatePath)} // Call navigate when the button is clicked
            whileHover={{
              scale: 1.1,
              backgroundColor: "#16a34a",
              color: "#fff",
            }}
            className="px-4 py-2 text-sm font-medium border border-green-500 text-white-600 rounded-full hover:bg-green-600 hover:text-white transition-all">
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default function SubscriptionPdi() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Correctly initialize navigate here
  const { productsCategory, loading } = useSelector((state) => state.product);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loadingCategory, setLoadingCategory] = useState(false);

  // Product data (replace this with your actual data)
  const products = [
    {
      title: "Complete Course",
      description:
        "A complete instructor training course covering all parts of the ADI qualification.",
      price: "499.99",
      imgSrc: "path/to/image1.jpg", // Replace with actual image URL
      navigatePath: "/driving-instructor-training-full-course",
    },
    {
      title: "Online Part 1",
      description:
        "Theory Portal for ADI Part 1 with mock tests and bonus quizzes.",
      price: "49.99",
      imgSrc: "path/to/image2.jpg", // Replace with actual image URL
      navigatePath: "/driving-instructor-training-part-one",
    },
    {
      title: "Online Part 2",
      description:
        "Course for ADI Part 2 exam preparation with practical exercises and quizzes.",
      price: "149.99",
      imgSrc: "path/to/image3.jpg", // Replace with actual image URL
      navigatePath: "/driving-instructor-training-part-two",
    },
    {
      title: "Online Part 3",
      description:
        "Prepare confidently for ADI Part 3 with interactive quizzes and modules.",
      price: "399.99",
      imgSrc: "path/to/image4.jpg", // Replace with actual image URL
      navigatePath: "/driving-instructor-training-part-three",
    },
  ];

  const gradients = [
    "from-pink-200 via-pink-300 to-pink-400",
    "from-yellow-200 via-yellow-300 to-yellow-400",
    "from-green-200 via-green-300 to-green-400",
    "from-blue-200 via-blue-300 to-blue-400",
    "from-purple-200 via-purple-300 to-purple-400",
    "from-red-200 via-red-300 to-red-400",
    "from-indigo-200 via-indigo-300 to-indigo-400",
    "from-teal-200 via-teal-300 to-teal-400",
  ];

  useEffect(() => {
    if (!selectedCategory && products.length > 0) {
      setSelectedCategory(products[0].title); // Automatically select the first product
    }
  }, [products, selectedCategory]);

  useEffect(() => {
    dispatch(getAllProductsCategory("", 0)); // Dispatch to fetch products (if needed)
  }, [dispatch]);

  return (
    <section className="py-10 bg-gradient-to-b from-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">
          PDI Packages
        </h2>

        {/* Product Grid or Skeleton Loader */}
        <AnimatePresence>
          <div
            layout
            className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {loadingCategory || loading
              ? // Show skeleton loader while loading
                Array(8)
                  .fill(0)
                  .map((_, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden p-4">
                      <Skeleton height={180} className="mb-4 rounded-lg" />
                      <Skeleton width={`80%`} height={20} className="mb-2" />
                      <Skeleton width={`60%`} height={18} className="mb-3" />
                      <Skeleton width={`50%`} height={30} />
                    </div>
                  ))
              : // Display product cards once data is loaded
                products.map((product, idx) => (
                  <ProductCard
                    key={idx}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    imgSrc={product.imgSrc}
                    navigatePath={product.navigatePath}
                    gradientClass={gradients[idx % gradients.length]} // Dynamically assign gradient
                  />
                ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
