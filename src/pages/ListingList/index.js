import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import {
  selectListings,
  selectError,
  selectLoading,
  loadListings,
} from "./listingsSlice";

export const ListingList = () => {
  const listings = useSelector(selectListings);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    loadListings();
  }, []);

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }
};
