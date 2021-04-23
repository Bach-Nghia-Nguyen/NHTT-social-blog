import * as types from "../constants/route.constants";

const redirect = (link) => (dispatch) => {
  dispatch({ type: types.REDIRECT_TO, payload: link });
};

const removeRedirectTo = () => (dispatch) => {
  dispatch({ type: types.REMOVE_REDIRECT_TO, payload: null });
};

export const routeActions = { redirect, removeRedirectTo };
