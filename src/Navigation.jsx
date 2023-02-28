import SearchBar from "./Search";
import { Routes, Route } from "react-router-dom";
import SearchResult from "./Result";
import products from "./products.json";

function Navigation() {
  const allProducts = products.products;

  return (
    <div className="Navigation">
      <Routes>
        <Route path="/" element={<SearchBar products={allProducts} />} />
      </Routes>
    </div>
  );
}

export default Navigation;

/*
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

export default Navigation; */

/********************************************************************************** */
/*
import "./App.css";
import SearchBar from "./Search";
import { Routes, Route } from "react-router-dom";
import Description from "./Description";
import SearchResult from "./Result";
import products from "./products.json";
import { useEffect, useState } from "react";

function Navigation() {
  const allProducts = products.products;
  const [searchState, setSearchState] = useState("");
  useEffect(() => {
    console.log(searchState);
  }, [searchState]);
  const updateSearchResult = (result) => {
    setSearchState(result);
  };

  return (
    <div className="Navigation">
      <Routes>
        <Route
          path=""
          element={
            <SearchBar
              products={allProducts}
              theSearchResult={updateSearchResult}
            />
          }
        />
        <Route
          path="/products/"
          element={
            <SearchResult
              products={allProducts}
              sendSearchResult={searchState}
            />
          }
        />
        <Route
          path="/products/:id"
          element={<Description products={allProducts} />}
        />
      </Routes>
    </div>
  );
}

export default Navigation; */
