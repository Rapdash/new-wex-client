import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ListingList } from "./pages/ListingList";

function App() {
  return (
    <BrowserRouter>
      
      <Route path="/listings" component={ListingList} />
    </BrowserRouter>
  );
}

export default App;
