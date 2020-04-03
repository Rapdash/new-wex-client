import { useSelector } from "react-redux";
import {selectListings, addListing, loadListings } from "./listingsSlice";

export const ListingList = () => {
  const listings = useSelector(selectListings);
}