import { useState } from "react";
import products from "./products.json";
import styles from "./styles/search.module.css";
import Binding from "./Binding";

function SearchBar() {
  const allProducts = products.products;
  const [search, setSearch] = useState(""); //Search state with empty inital value
  const [showResult, setShowResult] = useState(false); // if true will show the search result

  const searchOnChange = (e) => {
    let searchToLowerCase = e.target.value.toLowerCase();
    setSearch(searchToLowerCase);
    if (searchToLowerCase === "") {
      setShowResult(false);
    }
  };

  const filterProducter = allProducts.filter((p) => {
    return (
      p.name.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search)
    );
  });

  const onClickHandel = (e) => {
    console.log("Clicked");
    e.preventDefault();
    if (search.length > 0) {
      setShowResult(true);
    } else if (search === "") {
      setShowResult(false);
    }
  };

  return (
    <div className={styles.App}>
      <form className={styles.searchContainer}>
        <label htmlFor="Search">Search for products</label>
        <div className={styles.searchBar}>
          <input
            type="text"
            onChange={searchOnChange}
            value={search}
            placeholder="Search..."
          />
          <button onClick={onClickHandel}>Search</button>
        </div>
      </form>

      {showResult && (
        <Binding filterProducter={filterProducter} products={allProducts} />
      )}
    </div>
  );
}

export default SearchBar;

/*
import { useState } from "react";
import SearchResult from "./Result";

function SearchBar(props) {
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const allProducts = props.products;

  const searchOnChange = (e) => {
    let searchToLowerCase = e.target.value.toLowerCase();
    setSearch(searchToLowerCase);
    console.log(e.target.value);
    if (searchToLowerCase.length > 3) {
      setVisible(true);
    } else if (searchToLowerCase === "") {
      setVisible(false);
    }
  };

  const filterProducter = allProducts.filter((p) => {
    if (search === "") {
      return p;
    } else {
      return (
        p.name.toLowerCase().includes(search) ||
        p.description.toLowerCase().includes(search)
      );
    }
  });

  const onClickHandel = (e) => {
    console.log("Clicked");
    e.preventDefault();
    if (search.length > 0) {
      setVisible(true);
    } else if (search === "") {
      setVisible(false);
    }
  };
  return (
    <>
      <form className="searchContainer">
        <label htmlFor="Search">Search for products</label>
        <div className="searchBar">
          <input
            type="text"
            onChange={searchOnChange}
            value={search}
            placeholder="Search..."
          />
          <button onClick={onClickHandel}>Search</button>
        </div>
      </form>

      {visible && (
        <div className="producter-container">
          {filterProducter.map((p) => (
            <SearchResult key={p.id} item products={allProducts} product={p} />
          ))}
        </div>
      )}
    </>
  );
}

export default SearchBar; */

/**************************************************************************** */

/*
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchBar(props) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchOnChange = (e) => {
    let searchToLowerCase = e.target.value;
    setSearch(searchToLowerCase);
  };

  const onClickHandel = (e) => {
    console.log("Clicked");
    e.preventDefault();
    props.theSearchResult(search);
    navigate("/products");
  };
  return (
    <>
      <form className="searchContainer">
        <label htmlFor="Search">Search for products</label>
        <div className="searchBar">
          <input
            type="text"
            onChange={searchOnChange}
            value={search}
            placeholder="Search..."
          />
          <button onClick={onClickHandel}>Search</button>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
*/
