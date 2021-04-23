import * as types from "../constants/user.constants";

const initialState = {
  loading: false,
};

const userReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_USERS_REQUEST:
      state.loading = true;
      break;

    case types.GET_USERS_SUCCESS:
      state.loading = false;
      break;

    case types.GET_USERS_FAILURE:
      state.loading = false;
      break;

    default:
      return state;
  }

  return { ...state };
};

export default userReducers;
