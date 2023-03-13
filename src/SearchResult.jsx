import { useState } from "react";
import ResultList from "./ResultList";
import ShoppingCart from "./ShoppingCart";
import styles from "./styles/searchResult.module.css";

function SearchResult({ filterProducter, search }) {
  const [cartState, setCartState] = useState([]);                       // Empty array which will contain all products that added to shopping cart.

  const selectAProduct = (p) => {                                       // Have a product som parameter.         
    let newProductAdded = [...cartState, { ...p, quantity: 1 }];        // Create a new state that is a copy of catState and add quantity atribute 
    const selectedProduct = cartState.find((item) => item.id === p.id); // Check if the product has been added previously
    
    if (!selectedProduct) {                                             // If not => add this product to the cart. 
      setCartState(newProductAdded);
    } else {                                                            // otheWise => will update the quantity of the product 
      const updateQty = cartState.map((item) =>                         // select the product and add +1 to the item quantity
        item.id === p.id ? { ...item, quantity: item.quantity + 1 } : item);
      setCartState(updateQty);
    }
  };

  const removeProduct = (p) => {
    const checkTheProduct = cartState.filter((item) => item !== p);
    setCartState(checkTheProduct);
  };
  return (
      <div className={styles.resultContainer}>
        <div className={styles.producterContainer}>
          {search.length > 0  && filterProducter.map((p) => (
            <ResultList key={p.id} item product={p} onClickAdd={selectAProduct} />
            ))}
        </div>
        <div className={styles.shoppingCardContainer}>
          <ShoppingCart cartState={cartState} removeProduct={removeProduct} />
        </div> 
      </div>
  );
}

export default SearchResult;
