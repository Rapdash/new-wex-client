import { configureStore } from '@reduxjs/toolkit';
import listingsReducer from './listingsSlice';

export default configureStore({
  reducer: {
    listings: listingsReducer
  },
});
