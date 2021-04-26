import * as types from "../constants/auth.constants";
import { toast } from "react-toastify";

import api from "../../apiService";
import { routeActions } from "./route.actions";

const register = (data) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST, payload: null });
  try {
    const response = await api.post("/users", data);

    dispatch({ type: types.REGISTER_SUCCESS, payload: response.data.data });
    dispatch(routeActions.redirect("/login"));

    toast.success(`Thank for your registration, ${data.name}`);
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error.message });
  }
};

const login = ({ email, password }) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const res = await api.post(`/auth/login`, { email, password });
    dispatch(routeActions.redirect("/"));
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.data });
    api.defaults.headers.common["authorization"] =
      "Bearer " + res.data.data.accessToken;
    const userName = `${res.data.data.user.name}`;
    toast.success(`Welcome, ${userName}`);
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: null });
    toast.error(error.message);
  }
};

const logout = () => (dispatch) => {
  dispatch({ type: types.LOGOUT, payload: null });
  try {
    dispatch(routeActions.redirect("/"));
  } catch (error) {
    toast.error(error.message);
  }
};

export const authActions = { register, login, logout };
