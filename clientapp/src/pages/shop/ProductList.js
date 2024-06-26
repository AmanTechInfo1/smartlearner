// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useFilterContext } from "../../components/context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";
import ProductDetails from "./ProductDetails";
import { useEffect, useState } from "react";
import { getAllProducts, getAllProductsCategory } from "../../redux/features/productSlice";

export default function ProductList() {
  // const { filter_products, setGridView } = useFilterContext();

  let filter_products = useSelector((state) => {
    return state.product.sortedProducts
  })

  


  const [filter, setFilter] = useState({
    "search": "",
    "page": 1,
    "pageSize": 20
  })


  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(getAllProductsCategory(filter.search, filter.page, filter.pageSize));
  }, [dispatch, filter.search, filter.page, filter.pageSize]);




  return (<GridView products={filter_products} />)


}
