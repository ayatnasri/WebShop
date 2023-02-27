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

export default SearchBar;
