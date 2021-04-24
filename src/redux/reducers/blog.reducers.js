import * as types from "../constants/blog.constants";

const initialState = {
  blogs: [],
  selectedBlog: null,
  totalPageNum: 1,
  loading: false,
  submitLoading: false,
  error: null,
};

const blogReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_BLOGS_REQUEST:
    case types.GET_BLOG_DETAIL_REQUEST:
      state.loading = true;
      state.error = null;
      break;

    case types.SEND_REACTION_REQUEST:
      state.submitLoading = true;
      break;

    case types.GET_BLOGS_SUCCESS:
      state.loading = false;
      break;

    case types.GET_BLOG_DETAIL_SUCCESS:
      state.selectedBlog = payload;
      state.loading = false;
      break;

    case types.BLOG_REACTION_SUCCESS:
      state.selectedBlog = { ...state.selectedBlog, reactions: payload };
      state.submitLoading = false;
      break;

    case types.REVIEW_REACTION_SUCCESS:
      break;

    case types.GET_BLOGS_FAILURE:
    case types.GET_BLOG_DETAIL_FAILURE:
      state.error = payload;
      state.loading = false;
      break;

    case types.SEND_REACTION_FAILURE:
      state.submitLoading = false;
      break;

    default:
      return state;
  }

  return { ...state };
};

export default blogReducers;
