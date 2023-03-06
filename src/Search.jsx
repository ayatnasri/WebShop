import { useState } from "react";
import products from "./JSON/products.json";
import styles from "./styles/search.module.css";
import SearchResult from "./SearchResult";

function SearchBar() {
  const allProducts = products.products;                                  // Get the data / Products
  const [search, setSearch] = useState("");                               //Search state with empty inital value
  const [state, setState] = useState({showResult:false, noResult:false}); // show the result or No result match the search term

  const searchOnChange = (e) => {
    let searchToLowerCase = e.target.value.toLowerCase();                 // Convert the search term to lowerCase
    setSearch(searchToLowerCase);                                         // Change the search value
    setState({ showResult:false, noResult:false });                       // Result don't appear until the user click the button 
  };
  
  const filterProducter = allProducts.filter((p) => {                     // Filter the result according to the product's name or description
    return (
      p.name.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search)
    );
  });

  const onSubmitHandel = (e) => {                                         // When click on search button
    e.preventDefault();                                                   // Don't reload the page
    if (search.length > 0 && filterProducter.length > 0 ) {               // If user write something and ther are results match 
      setState({showResult:true, noResult:false });                       // => show the result
    } else {
      setState({showResult:false, noResult:true });                       // OtherWise => No result match search term.
    }
  };



  return (
    <div className={styles.App}>
      <div className={styles.search}>
        <h1>Welcome to my web shop</h1>
        <div className={styles.logo} >
          <h2> Bridal Fashion</h2>
        </div>
        <form onSubmit={onSubmitHandel} className={styles.searchContainer}>
          <label htmlFor="Search"/>
          <div className={styles.searchBar}>
            <input type="text" onChange={searchOnChange} value={search} placeholder="Search for products ..."/>
            <button type="submit">Search</button>
          </div>
        </form>

        {state.noResult && (<p className={styles.noResult}>NO RESULT MATCH <i>"{search}"</i>. Please try again!</p>)}
        {state.showResult && (<SearchResult filterProducter={filterProducter} />)}
     
      </div>
    </div>
  );
}

export default SearchBar;
//        {showResult === ''&& (<p>No Result match {showResult}</p>)}
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
