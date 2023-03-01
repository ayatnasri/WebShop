import { useState } from "react";
import SearchResult from "./Result";
import ShoppingCart from "./ShoppingCart";
import styles from "./styles/search.module.css";

function Binding({ products, filterProducter }) {
  const [cartState, setCartState] = useState([]);
  //const [quantity, setQuantity] = useState(0);

  const selectAProduct = (p) => {
    let newProductAdded = [...cartState, { ...p, quantity: 1 }];
    const selectedProduct = cartState.find((item) => item.id === p.id);
    if (!selectedProduct) {
      console.log(newProductAdded);
      setCartState(newProductAdded);
    } else {
      const updateQty = cartState.map((item) =>
        item.id === p.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartState(updateQty);
      console.log("the same product");
    }
  };

  const removeProduct = (p) => {
    const checkTheProduct = cartState.filter((item) => item !== p);
    setCartState(checkTheProduct);
  };
  return (
    <>
      <div className={styles.resultContainer}>
        <div className={styles.producterContainer}>
          {filterProducter.map((p) => (
            <SearchResult
              key={p.id}
              item
              products={products}
              product={p}
              onClickAdd={selectAProduct}
            />
          ))}
        </div>

        <div className={styles.shoppingCardContainer}>
          <ShoppingCart cartState={cartState} removeProduct={removeProduct} />
        </div>
      </div>
    </>
  );
}

export default Binding;

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
