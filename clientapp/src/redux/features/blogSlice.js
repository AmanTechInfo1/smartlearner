import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        blogs: [],
        blogsCount: null,
        loading: false,
        blogsList: [],
        blog: null,
    },
    reducers: {
        getAllBlogsSuccess: (state, action) => {
            state.blogs = action.payload.blogs;
            state.blogsCount = action.payload.totalCount;
            state.loading = false;
        },
        getAllBlogsFailure: (state) => {
            state.blogs = [];
            state.blogsCount = null;
            state.loading = false;
        },
        createBlogSuccess: (state, action) => { 
            state.blogs.push(action.payload.blog);
            state.blogsCount = action.payload.totalCount;
            state.loading = false;
        },
        createBlogFailure: (state) => {
            state.loading = false;
        },
        editBlogSuccess: (state, action) => {
            const updatedBlog = action.payload.blog;
            state.blogs = state.blogs.map(blog => blog._id === updatedBlog._id ? updatedBlog : blog);
            state.loading = false;
        },
        editBlogFailure: (state) => {
            state.loading = false;
        },
        getListBlogsSuccess: (state, action) => {
            state.blogsList = action.payload;
            state.loading = false;
        },
        getListBlogsFailure: (state) => {
            state.blogsList = [];
            state.loading = false;
        },
        getBlogByIdSuccess: (state, action) => {
            state.blog = action.payload;
            state.loading = false;
        },
        getBlogByIdFailure: (state) => {
            state.blog = null;
            state.loading = false;
        },
        deleteBlogSuccess: (state, action) => {
            const blogId = action.payload;
            state.blogs = state.blogs.filter(blog => blog._id !== blogId);
            state.blogsCount = state.blogsCount - 1;
            state.loading = false;
        },
        deleteBlogFailure: (state) => {
            state.loading = false;
        },
        setLoading: (state) => {
            state.loading = true;
        },
    },
});

export const getAllBlogs = (search, page, pagesize) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/blogs/all-blogs?search=${search}&page=${page}&pagesize=${pagesize}`
        );
        if (response.data.success) {
            dispatch(getAllBlogsSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getAllBlogsFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getAllBlogsFailure());
    }
};

export const createBlog = (data, reset, toggleAddBlogModal) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/blogs/create-blog`, data);
        if (response.data.success) {
            toast.success(response.data.message);
            reset();
            toggleAddBlogModal();
            dispatch(createBlogSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(createBlogFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(createBlogFailure());
    }
};

export const editBlog = (id, data, toggleEditBlogModal) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/blogs/update-blog/${id}`, data);
        if (response.data.success) {
            dispatch(editBlogSuccess(response.data.data));
            toast.success(response.data.message);
            toggleEditBlogModal();
        } else {
            toast.error(response.data.message);
            dispatch(editBlogFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(editBlogFailure());
    }
};

export const getListBlogs = () => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/blogs/blog-list`);
        if (response.data.success) {
            dispatch(getListBlogsSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getListBlogsFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getListBlogsFailure());
    }
};

export const getBlogById = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/blogs/blog/${id}`);
        if (response.data.success) {
            dispatch(getBlogByIdSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getBlogByIdFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getBlogByIdFailure());
    }
};

export const deleteBlog = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/blogs/delete-blog/${id}`);
        if (response.data.success) {
            dispatch(deleteBlogSuccess(id));
        } else {
            toast.error(response.data.message);
            dispatch(deleteBlogFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(deleteBlogFailure());
    }
};

export const {
    getAllBlogsSuccess,
    getAllBlogsFailure,
    createBlogSuccess,
    createBlogFailure,
    getListBlogsSuccess,
    getListBlogsFailure,
    editBlogSuccess,
    editBlogFailure,
    getBlogByIdSuccess,
    getBlogByIdFailure,
    deleteBlogSuccess,
    deleteBlogFailure,
    setLoading
} = blogSlice.actions;

export default blogSlice.reducer;
