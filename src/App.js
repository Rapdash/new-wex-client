import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ListingListPage } from "./pages/ListingList";

export function App() {
  return (
    <BrowserRouter>
      
      <Route path="/listings" component={ListingListPage} />
    </BrowserRouter>
  );
}
