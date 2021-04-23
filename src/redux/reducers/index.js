import { combineReducers } from "redux";

import authReducers from "./auth.reducers";
import blogReducers from "./blog.reducers";
import routeReducers from "./route.reducers";

const rootReducer = combineReducers({
  blog: blogReducers,
  auth: authReducers,
  route: routeReducers,
});

export default rootReducer;
