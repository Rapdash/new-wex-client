import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectListings,
  selectError,
  selectLoading,
  loadListings,
} from "../../data/listingsSlice";

export const ListingListPage = () => {
  const listings = useSelector(selectListings);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadListings())
  }, [dispatch]);

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }
  if (error) {
    return <h1 className="text-center">Error: {error}</h1>;
  }
  if (listings) {
    return <div />
  }
};
