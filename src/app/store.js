import { configureStore } from '@reduxjs/toolkit';
import listingsReducer from '../pages/ListingList/listingSlice';

export default configureStore({
  reducer: {
    listings: listingsReducer
  },
});
