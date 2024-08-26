import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],
        productsCategory: [],
        oneproduct: {},
        oneorders:{},
        orderCount: null,
        productsCategoryCount: null,
        loading: false,
    },
    reducers: {
        getAllOrdersSuccess: (state, action) => {
            state.orders = action.payload.order;
            state.orderCount = action.payload.totalCount;
            state.loading = false;
        },
        getAllOrdersFailure: (state) => {
            state.orders = [];
            state.orderCount = 0;
            state.loading = false;
        },
        getOrdersSuccess: (state, action) => {
            state.oneorders = action.payload.order;
            state.loading = false;
        },
        getOrdersFailure: (state) => {
            state.oneorders = {};
            state.loading = false;
        },
        
        getAllProductsCategorySuccess: (state, action) => {
            state.productsCategory = action.payload.products;
            state.productsCategoryCount = action.payload.totalCount;
            state.loading = false;
        },
        getAllProductsCategoryFailure: (state) => {
            state.productsCategory = [];
            state.productsCategoryCount = null;
            state.loading = false;
        },

        getOneProductsSuccess: (state, action) => {

            console.log("getOneProductsSuccess",action.payload)
            state.oneproduct = action.payload
        },
        getOneProductsFailure: (state) => {
            state.products = [];
            state.oneproduct = {}
            state.productCount = null;
            state.loading = false;
        },
        createProductSuccess: (state, action) => {
            // state.products.push(action.payload.product);
            // state.productCount = action.payload.totalCount;
            state.loading = false;
        },
        createProductFailure: (state) => {
            state.loading = false;
        },
        editProductSuccess: (state, action) => {
            // state.products.push(action.payload.product);
            // state.productCount = action.payload.totalCount;
            state.loading = false;
        },
        editProductFailure: (state) => {
            state.loading = false;
        },
        createCategorySuccess: (state, action) => {
            state.products.push(action.payload.category);
            state.productCount = action.payload.totalCount;
            state.loading = false;
        },
        createCategoryFailure: (state) => {
            state.loading = false;
        },
        deleteProductSuccess: (state, action) => {
            state.products = state.products.filter(
                (product) => product._id !== action.payload.id
            );
            state.productCount = action.payload.totalCount;
            state.loading = false;
        },
        deleteProductFailure: (state) => {
            state.loading = false;
        },
        setLoading: (state) => {
            state.loading = true;
        },
    },
});

export const getAllOrders = (search, page, pagesize) => async (dispatch) => {
    try {

        console.log(search, page, pagesize,"search, page, pagesize")
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/order/getAllOrder?search=${search}&page=${page}&pagesize=${pagesize}`
        );
        if (response.data.success) {
            dispatch(getAllOrdersSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getAllOrdersFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getAllOrdersFailure());
    }
};
export const getOneOrders = (orderId) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/order/getOrder/${orderId}`
        );
        if (response.data.success) {
            dispatch(getOrdersSuccess(response.data.data));
           
        } else {
            toast.error(response.data.message);
            dispatch(getOrdersFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getAllOrdersFailure());
    }
};
export const getAllProductsCategory = (search, page, pagesize) => async (dispatch) => {
    try {

        console.log(search, page, pagesize,"search, page, pagesize")
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/product/get-productsCategory?search=${search}&page=${page}&pagesize=${pagesize}`
        );
        if (response.data.success) {
            dispatch(getAllProductsCategorySuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getAllProductsCategoryFailure());
        }
    } catch (error) {
        toast.error(error.message);
        // dispatch(getAllProductsFailure());
    }
};

export const getAllProductsById = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/product/get-products/${id}`
        );

        console.log(response.statusText,"response.dataresponse.data")
        if (response.data) {
            dispatch(getOneProductsSuccess(response.data));
        } else {
            toast.error(response.statusText);
            dispatch(getOneProductsFailure());
        }
    } catch (error) {
        toast.error(error.message);
        // dispatch(getAllProductsFailure());
    }
};

export const createCategory = (data, reset, toggleAddCategoryModal) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/product/add-category`, data);
        if (response.data.success) {
            toast.success(response.data.message);
            reset();
            dispatch(createCategorySuccess(response.data.data));
            toggleAddCategoryModal();
        } else {
            toast.error(response.data.message);
            dispatch(createCategoryFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(createCategoryFailure());
    }
};



export const createProduct = (data, reset, toggleAddCategoryModal,state) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/product/add-product`, data,{headers:{"Content-Type":"multipart/form-data"}});
        if (response.data.success) {
            toast.success(response.data.message);
            reset();
            dispatch(createProductSuccess(response.data.data));
            toggleAddCategoryModal();
            // dispatch(getAllProducts(state.search, state.page, state.pageSize))
        } else {
            toast.error(response.data.message);
            dispatch(createProductFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(createProductFailure());
    }
};

export const editProduct = (id,data,reset,toggleEditProductModal,state) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/product/edit-product/${id}`, data,{headers:{"Content-Type":"multipart/form-data"}});
        if (response.data.success) {
            toast.success(response.data.message);
            reset();
            toggleEditProductModal();
            // dispatch(getAllProducts(state.search, state.page, state.pageSize))
        } else {
            toast.error(response.data.message);
            dispatch(editProductFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(editProductFailure());
    }
};
export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/product/delete-product/${id}`);
        if (response.data.success) {
            toast.success(response.data.message);
            dispatch(deleteProductSuccess({ id, totalCount: response.data.totalCount }));
        } else {
            toast.error(response.data.message);
            dispatch(deleteProductFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(deleteProductFailure());
    }
};

export const {
    getAllOrdersSuccess,
    getAllOrdersFailure,
    getOrdersSuccess,
    getOrdersFailure,
    getAllProductsCategorySuccess,
    getAllProductsCategoryFailure,
    getOneProductsSuccess,
    getOneProductsFailure,
    createProductSuccess,
    createProductFailure,
    editProductSuccess,
    editProductFailure,
    createCategorySuccess,
    createCategoryFailure,
    deleteProductSuccess,
    deleteProductFailure,
    setLoading,
} = orderSlice.actions;

export default orderSlice.reducer;
