import { configureStore } from '@reduxjs/toolkit';
import listingsReducer from '../data/listingsSlice';

export default configureStore({
  reducer: {
    listings: listingsReducer
  },
});
