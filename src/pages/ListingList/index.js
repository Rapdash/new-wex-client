import { useSelector } from "react-redux";
import {selectListings, selectError, selectLoading addListing, loadListings } from "./listingsSlice";

export const ListingList = () => {
  const listings = useSelector(selectListings);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  if (loading) {
    return (<h1 className="text-center">Loading...</h1>)
  }
}