import { useState } from "react";
import ResultList from "./ResultList";
import ShoppingCart from "./ShoppingCart";
import styles from "./styles/searchResult.module.css";

function SearchResult({ filterProducter }) {
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
          {filterProducter.map((p) => (
            <ResultList key={p.id} item product={p} onClickAdd={selectAProduct} />
            ))}
        </div>
        <ShoppingCart cartState={cartState} removeProduct={removeProduct} />
      </div>
  );
}

export default SearchResult;

/*import { useReducer } from "react";
  const initialValue = {
    cart:[], 
    qty: 0,
    total:0
  }

  const [state, dispatch] = useReducer(reducer, initialValue )

  const reducer = (state, action) => {
    switch (action.type){
      case 'Add':
        const checkTheState = state.cart.find((item) => item.id === action.payload.id );
        if(checkTheState){
          return {
            ...state, cart:state.cart.map((i) => i.id === action.payload.id ? {...i, q: i.q+1}: i) 
          };
        }
      default : null;
        }
    }
  }
*/

// const [totalAmount, setTotalAmount] = useState(0);
//const [quantity, setQuantity] = useState(0);

/*   console.log(p);
        setNumberOfProduct((n) => n + 1);
    console.log(productState);
    console.log(newProductAdded);
    for (let i = 0; i < productState.length; i++) {
      let oldProduct = productState[i];
      let newProduct = newProductAdded[i];
      console.log("old:" + oldProduct.id, "new: " + newProduct.id);
      if (newProduct.id === oldProduct.id) {
        setNumberOfProduct((n) => n + 1);
      }
    }*/
