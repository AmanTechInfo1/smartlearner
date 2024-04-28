// import React from 'react'
import { useFilterContext } from "../../component/Context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";
import ProductDetails from "./ProductDetails";

export default function ProductList() {
  const { filter_products, setGridView } = useFilterContext();

  if (setGridView) {
    return <GridView products={filter_products} />;
  }
  // if (setGridView === false) {
  //   return <ListView products={filter_products} />;
  // }
}
