import "./App.css";
import SearchBar from "./Search";
import { Routes, Route } from "react-router-dom";
import Description from "./Description";
import SearchResult from "./Result";
import products from "./products.json";

function Navigation() {
  const allProducts = products.products;

  return (
    <div className="Navigation">
      <Routes>
        <Route path="" element={<SearchBar products={allProducts} />} />
        <Route
          path="/producter/"
          element={<SearchResult products={allProducts} />}
        />
        <Route
          path="/producter/:id"
          element={<Description products={allProducts} />}
        />
      </Routes>
    </div>
  );
}

export default Navigation;
