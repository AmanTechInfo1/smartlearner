import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../utils/httpHandler";
import { toast } from "react-hot-toast";

const rolesSlice = createSlice({
  name: "roles",
  initialState: {
    roles: [],
    rolesCount: null,
    loading: false,
  },
  reducers: {
    getAllRolesSuccess: (state, action) => {
      state.roles = action.payload.roles;
      state.rolesCount = action.payload.totalCount;
      state.loading = false;
    },
    getAllRolesFailure: (state) => {
      state.roles = [];
      state.rolesCount = null;
      state.loading = false;
    },
    createRoleSuccess: (state, action) => {
      state.roles.push(action.payload.role);
      state.rolesCount = action.payload.totalCount;
      state.loading = false;
    },

    createRoleFailure: (state, action) => {
      state.loading = false;
    },
    editRoleSuccess: (state, action) => {
      state.loading = false;
    },
    editRoleFailure: (state, action) => {
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const getAllRoles = (search, page, pagesize) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(
      `/api/roles/all-roles?search=${search}&page=${page}&pagesize=${pagesize}`
    );
    if (response.data.success) {
      dispatch(getAllRolesSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getAllRolesFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getAllRolesFailure());
  }
};
export const createRole =
  (data, reset, toggleAddRoleModal) => async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await httpHandler.post(`/api/roles/add-role`, data);

      if (response.data.success) {
        toast.success(response.data.message);

        dispatch(createRoleSuccess(response.data.data));
        reset();
        toggleAddRoleModal();
      } else {
        toast.error(response.data.message);

        dispatch(createRoleFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(createRoleFailure());
    }
  };

export const editRole = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.post(`/api/update-role/${id}`);
    if (response.data.success) {
      toast.success(response.data.message);
      dispatch(editRoleSuccess());
    } else {
      toast.error(response.data.message);
      dispatch(editRoleFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(editRoleFailure());
  }
};
export const {
  getAllRolesSuccess,
  getAllRolesFailure,
  createRoleSuccess,
  createRoleFailure,
  editRoleSuccess,
  editRoleFailure,
  setLoading,
} = rolesSlice.actions;
export default rolesSlice.reducer;
