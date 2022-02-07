import { configureStore } from "@reduxjs/toolkit";
import navLinksRefsReducer from "./refSlice";

export const store = configureStore({
  reducer: {
    ref: navLinksRefsReducer,
  },
});
