import * as types from "../constants/auth.constants";
import { toast } from "react-toastify";

import api from "../../apiService";
import { routeActions } from "./route.actions";

const register = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.REGISTER_REQUEST, payload: null });
    const response = await api.post("/users", data);

    dispatch({ type: types.REGISTER_SUCCESS, payload: response });
    dispatch(routeActions.redirect("/login"));

    toast.success(`Thank for your registration, ${data.name}`);
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error.message });
  }
};

const login = () => (dispatch) => {};

const logout = () => (dispatch) => {};

export const authActions = { register, login, logout };
