import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  data: [],
  status: STATUSES.IDLE,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setProducts(state, action) {
      console.log(action.payload);
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, remove, setStatus } = productSlice.actions;
export default productSlice.reducer;

// thunk
export function fetchProducts(param) {
  return async function fetchProductsThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await axios.get(process.env.REACT_APP_SECRET_KEY, {
        params: param,
      });
      const data = response.data.data;
      console.log(data);
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
