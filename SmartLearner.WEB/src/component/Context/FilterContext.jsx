import  { createContext, useContext, useEffect, useReducer } from "react";
import { products } from "../../assets/data/Products";
import { FilterReducer } from "./Reducer/FilterReducer"; // Import the reducer from FilterReducer.js



const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
};

export const FilterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(FilterReducer, initialState);

    //  to set grid view
const setGridView =()=>{
    return dispatch ({type:"SET_GRIDVIEW"})

}



    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state, setGridView }}>
            { children }
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};
