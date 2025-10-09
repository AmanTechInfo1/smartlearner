import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getAllProductsCategory } from "../../../redux/features/productSlice";
import redCartImg from "../../../assets/images/redCartImg.png";
import redStarImg from "../../../assets/images/redStar.png";
import styled from "styled-components";
import styles from "./ProductShowCase.module.css";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductShowcase = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productsCategory, loading } = useSelector((state) => state.product);
  const myCart = useSelector((state) => state.cart.cart || []);

  // State to store selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // State to manage loading state per category
  const [loadingCategory, setLoadingCategory] = useState(false);

  // Handle category selection and filter products

  const excludedCategories = [
    "instructor training part three",
    "instructor training part two",
    "instructor training part one",
    "businessmentoring",
  ];

  const normalizedExclusions = excludedCategories.map((c) =>
    c.toLowerCase().trim()
  );

  // Build an array of entries where the visible name is not excluded
  const categories = productsCategory
    ? Object.entries(productsCategory).filter(([_, value]) => {
        const name = value?.data?.[0]?.categoryresult?.name;
        return (
          name && !normalizedExclusions.includes(name.toLowerCase().trim())
        );
      })
    : [];

  // Automatically select the first category after categories load
  useEffect(() => {
    if (!selectedCategory && categories.length > 0) {
      setSelectedCategory(categories[0][0]); // Set first category key as selected
    }
  }, [categories, selectedCategory]);

  const filteredProducts = selectedCategory
    ? productsCategory[selectedCategory]?.data || []
    : [];

  // Fetch all product categories on mount
  useEffect(() => {
    dispatch(getAllProductsCategory("", 0));
  }, [dispatch]);

  // Handle category button click
  const handleCategoryClick = (category) => {
    setLoadingCategory(true); // Set loading state to true when category is clicked
    setSelectedCategory(category);
  };

  // After products are fetched, set loading state to false
  useEffect(() => {
    if (selectedCategory && productsCategory[selectedCategory]) {
      setLoadingCategory(false); // Set loading state to false when the category data is available
    }
  }, [selectedCategory, productsCategory]);

  const StarWrapper = styled.div`
    display: flex;
    gap: 5px;
    padding: 0.5rem 0;
  `;

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

  const getProductId = (product, index) => {
    return `${product._id}_${index}_${product.price}`;
  };

  const getCartItem = (product, index) => {
    const id = getProductId(product, index);
    return myCart.find((item) => item.id === id);
  };

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

  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 4);

  return (
    <section className="py-10 bg-gradient-to-b from-blue-100 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">
          Explore Our Products
        </h2>

        {/* Category Buttons */}
        <div className={styles.flexCateButton}>
          {categories.map(([key, value]) => {
            const categoryName =
              value?.data?.[0]?.categoryresult?.name || "Unnamed";
            return (
              <motion.button
                key={key}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryClick(key)}
                className={`px-6 py-2 rounded text-sm font-medium transition-colors duration-300 ${
                  selectedCategory === key
                    ? "bg-blue-700 text-white shadow-lg"
                    : "bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-green"
                }`}>
                {categoryName}
              </motion.button>
            );
          })}
        </div>

        {/* Product Grid or Skeleton Loader */}
        <AnimatePresence>
          <div
            layout
            className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {loadingCategory || loading
              ? // 🦴 Skeleton loader for each product (while products load)
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
              : // ✅ Actual products
                visibleProducts?.map((product, idx) => {
                  const productId = getProductId(product, idx);
                  const inCart = getCartItem(product, idx);
                  return (
                    <motion.div
                      key={product._id || idx}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className={`rounded-3xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br ${
                        gradients[idx % gradients.length]
                      }`}>
                      {/* Product Image */}
                      <div className="relative">
                        <img
                          id={styles.redCartImg12}
                          src={redCartImg}
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-t-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                          <motion.button
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "#2563eb",
                              color: "#fff",
                            }}
                            className="mb-4 px-4 py-2 text-sm font-medium text-white bg-blue-600/80 rounded-full backdrop-blur-sm border border-white/30 transition-all">
                            View Details
                          </motion.button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                          {product.name}
                        </h4>
                        <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                          {product.description || "No description available."}
                        </p>
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
                          <span className="text-white-600 font-bold text-md">
                            {product.price
                              ? `£${product.price}`
                              : "Price Unavailable"}
                          </span>
                          {inCart ? (
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleDecrease(productId)}
                                className="px-2 py-1 bg-red-500 text-white rounded">
                                -
                              </button>
                              <span>{inCart.count}</span>
                              <button
                                onClick={() => handleIncrease(productId)}
                                className="px-2 py-1 bg-green-500 text-white rounded">
                                +
                              </button>
                            </div>
                          ) : (
                            <motion.button
                              onClick={() => handleAddToCart(product, idx)}
                              whileHover={{
                                scale: 1.1,
                                backgroundColor: "#16a34a",
                                color: "#fff",
                              }}
                              className="px-4 py-2 text-sm font-medium border border-green-500 text-white-600 rounded-full hover:bg-green-600 hover:text-white transition-all">
                              Add to Cart
                            </motion.button>
                          )}
                        </div>
                      </div>

                      {/* Glow border on hover */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent hover:border-blue-400/50 transition-all duration-300 pointer-events-none" />
                    </motion.div>
                  );
                })}
          </div>
        </AnimatePresence>

        {filteredProducts.length > 4 && (
          <div className="flex justify-center mt-10">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(59,130,246,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll((prev) => !prev)}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all">
              {showAll ? "Show Less" : "Show More"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;
