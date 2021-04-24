import * as types from "../constants/blog.constants";
import api from "../../apiService";

const getBlogs = () => async (dispatch) => {};

const getSingleBlog = (blog_id) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_BLOG_DETAIL_REQUEST, payload: null });

    let url = `/blogs/${blog_id}`;
    const response = await api.get(url);

    if (response.status === 200) {
      const data = response.data.data;
      dispatch({ type: types.GET_BLOG_DETAIL_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: types.GET_BLOG_DETAIL_FAILURE, payload: error.message });
  }
};

const createReview = () => (dispatch) => {};

const createBlog = () => (dispatch) => {};

const updateBlog = () => (dispatch) => {};

const deleteBlog = () => (dispatch) => {};

const sendEmojiReaction = ({ targetType, target_id, emoji }) => async (
  dispatch
) => {
  try {
    dispatch({ type: types.SEND_REACTION_REQUEST, payload: null });
    const response = await api.post(`/reactions`, {
      targetType,
      target_id,
      emoji,
    });
    const data = response.data;

    if (targetType === "Blog") {
      dispatch({ type: types.BLOG_REACTION_SUCCESS, payload: data });
    }

    if (targetType === "Review") {
      dispatch({ type: types.REVIEW_REACTION_SUCCESS });
    }
  } catch (error) {
    dispatch({ type: types.SEND_REACTION_FAILURE, payload: error.message });
  }
};

export const blogActions = {
  getBlogs,
  getSingleBlog,
  createReview,
  createBlog,
  updateBlog,
  deleteBlog,
  sendEmojiReaction,
};
