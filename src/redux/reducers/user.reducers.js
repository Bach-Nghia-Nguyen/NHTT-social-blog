import * as types from "../constants/user.constants";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST:
    case types.EDIT_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.EDIT_PROFILE_SUCCESS:
      console.log("Successful");
      return {
        ...state,
        loading: false,
      };

    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case types.GET_USERS_FAILURE:
    case types.EDIT_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducers;
