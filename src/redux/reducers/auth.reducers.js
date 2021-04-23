import * as types from "../constants/auth.constants";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST:
    case types.REGISTER_REQUEST:
      state.loading = true;
      break;

    case types.LOGIN_SUCCESS:
      state.user = payload;
      state.isAuthenticated = true;
      state.error = null;
      state.loading = false;
      break;

    case types.REGISTER_SUCCESS:
      state.loading = false;
      console.log("Successful");
      break;

    case types.LOGIN_FAILURE:
      state.error = payload;
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      break;

    case types.REGISTER_FAILURE:
      state.loading = false;
      break;

    default:
      return state;
  }

  return { ...state };
};

export default authReducers;
