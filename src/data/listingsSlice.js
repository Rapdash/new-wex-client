import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const listingSlice = createSlice({
  name: "listings",
  initialState: {
    list: [],
    loading: true,
    error: null,
  },
  reducers: {
    addListing: (state, action) => {
      state.list = [action.payload, ...state.listings];
    },
    addManyListings: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.list = [];
    },
  },
});

export const { addListing, addManyListings, setError } = listingSlice.actions;

export const loadListings = () => (dispatch) => {
  Axios.get(`${process.env.REACT_APP_API_ROOT}/listings`)
    .then(res => {
      dispatch(addManyListings(res.data));
    })
    .catch(error => {
      dispatch(setError(error.message));
    })
};

export const selectListings = (state) => state.listings.list;
export const selectLoading = (state) => state.listings.loading;
export const selectError = (state) => state.listings.error;

export default listingSlice.reducer;
