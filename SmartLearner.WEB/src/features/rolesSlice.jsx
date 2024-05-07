import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../utils/httpHandler";
import { toast } from "react-hot-toast";

const rolesSlice = createSlice({
    name: "roles",
    initialState: {
        roles: [],
        rolesCount: null,
        roleLoading: false,
        rolesList: [],
        role: null
    },
    reducers: {
        getAllRolesSuccess: (state, action) => {
            state.roles = action.payload.roles;
            state.rolesCount = action.payload.totalCount;
            state.roleLoading = false;
        },
        getAllRolesFailure: (state) => {
            state.roles = [];
            state.rolesCount = null;
            state.roleLoading = false;
        },
        createRoleSuccess: (state, action) => {
            state.roles.push(action.payload.role);
            state.rolesCount = action.payload.totalCount;
            state.roleLoading = false;
        },
        createRoleFailure: (state, action) => {
            state.roleLoading = false;
        },
        editRoleSuccess: (state, action) => {
            state.roleLoading = false;
        },
        editRoleFailure: (state, action) => {
            state.roleLoading = false;
        },
        getListRolesSuccess: (state, action) => {
            state.rolesList = action.payload;
            state.roleLoading = false;
        },
        getListRolesFailure: (state, action) => {
            state.rolesList = [];
            state.roleLoading = false;
        },
        getRoleByIdSuccess: (state, action) => {
            state.role = action.payload;
            state.roleLoading = false;
        },
        getRoleByIdFailure: (state, action) => {
            state.role = null;
            state.roleLoading = false;
        },
        setLoading: (state) => {
            state.roleLoading = true;
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
            setTimeout(() => {
                reset();
                toggleAddRoleModal();
            }, 100);
        } else {
            toast.error(response.data.message);
            dispatch(createRoleFailure());
        }
    } catch (error) {
      toast.error(error.message);
      dispatch(createRoleFailure());
    }
  };

export const editRole =
  (id, data, reset, toggleEditRoleModal) => async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await httpHandler.post(`/api/roles/update-role/${id}`, data);
      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(editRoleSuccess(response.data.data));
        reset();
        toggleEditRoleModal();
      } else {
        toast.error(response.data.message);
        dispatch(editRoleFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(editRoleFailure());
    }
}

export const getListRoles = () => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/roles/rolelist`);
        if (response.data.success) {
            dispatch(getListRolesSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getListRolesFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getListRolesFailure());
    }
}

export const getRoleById = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/roles/role/${id}`);
        if (response.data.success) {
            dispatch(getRoleByIdSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getRoleByIdFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getRoleByIdFailure());
    }
}

export const { getAllRolesSuccess, getAllRolesFailure, createRoleSuccess, createRoleFailure, editRoleSuccess, editRoleFailure,
    getListRolesSuccess, getListRolesFailure, getRoleByIdSuccess, getRoleByIdFailure, setLoading } =
    rolesSlice.actions;
export default rolesSlice.reducer;
