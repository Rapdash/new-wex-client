import { configureStore } from '@reduxjs/toolkit';
import listingsReducer from '../pages/ListingList/listingsSlice';

export default configureStore({
  reducer: {
    listings: listingsReducer
  },
});
