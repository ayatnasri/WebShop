import { useState } from "react";
import products from "./JSON/products.json";
import styles from "./styles/search.module.css";
import SearchResult from "./SearchResult";

function SearchBar() {
  const allProducts = products.products;                                  // Get the data / Products
  const [search, setSearch] = useState("");                               //Search state with empty inital value
  const [state, setState] = useState({showResult:false, noResult:false}); // show the result or No result match the search term
  const [suggest, setSuggest] = useState([]);                             // empty array to contain first 3 suggest 

  
  const searchOnChange = (e) => {
    let searchToLowerCase = e.target.value.toLowerCase();                 // Convert the search term to lowerCase
    setSearch(searchToLowerCase);                                         // Change the search value
    
    if(searchToLowerCase.length >= 3){                                    
      const dropDownFiltering = allProducts.filter((p)=> p.name.toLowerCase().includes(search.toLowerCase())); // filter all product 
      const sortProducts = dropDownFiltering.sort((a,b) => b.searchCount - a.searchCount); // compare two elements with sort function 
      //the order in which the two elements should be sorted. If the result is negative, a comes before b.
      const topThreeProducts = sortProducts.slice(0, 3); // get only first 3 
      setSuggest(topThreeProducts); // update the suggest array 
    } else { 
      setSuggest([]);
    }
  };
  
  const filterProducter = allProducts.filter((p) => {                     // Filter the result according to the product's name or description
    return (
      p.name.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search)
    );
  });

  const onSubmitHandel = (e) => {                                         // When click on search button
    e.preventDefault();                                                   // Don't reload the page
    if (search.length > 0 && filterProducter.length > 0 ) {               // If the search input isn't empty and there are results match products 
      setState({showResult:true, noResult:false });                       // => show the result
    } else {
      setState({showResult:false, noResult:true });                       // OtherWise => No result match search term.
    }
  };

  return (
    <div className={styles.App}>
      <div className={styles.search}>
        <h1>Welcome to magic web shop</h1>
        <div className={styles.logo} >
          <h2> Bridal Fashion</h2>
        </div>

        <form onSubmit={onSubmitHandel} className={styles.searchContainer}>
          <label htmlFor="Search"/>
          <div className={styles.searchBar}>
            <input type="text" onChange={searchOnChange} value={search} placeholder="Search for products ..."/>
            <button type="submit">Search</button>
          </div>
          <div className={styles.dropdown}>
              {suggest && suggest.map((p)=>(<ul key={p.id}><li onClick={() => {setSearch(p.name.toLowerCase()); setSuggest([])}}>{p.name}</li></ul>))}
          </div>
        </form>

        {state.noResult && (<p className={styles.noResult}>NO RESULT MATCH <i>"{search}"</i>. Please try again!</p>)}
        {state.showResult && (<SearchResult filterProducter={filterProducter} search={search}/>)}
     
      </div>
    </div>
  );
}

export default SearchBar;