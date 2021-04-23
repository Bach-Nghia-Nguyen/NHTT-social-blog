import * as types from "../constants/auth.constants";

import api from "../../apiService";
import { routeActions } from "./route.actions";

const register = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.REGISTER_REQUEST, payload: null });
    const response = await api.post("/users", data);
    dispatch(routeActions.redirect("/login"));

    dispatch({ type: types.REGISTER_SUCCESS, payload: null });
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error.message });
  }
};

const login = () => (dispatch) => {};

const logout = () => (dispatch) => {};

export const authActions = { register, login, logout };
