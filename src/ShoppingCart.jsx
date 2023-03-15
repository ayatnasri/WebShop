import styles from "./styles/shoppingCard.module.css";

function ShoppingCart({cartState, removeProduct}) {

  const totalPrice = cartState.reduce( // Total = array.reduce(total + (current product's price * qty))
    (total, currentProduct) => total + currentProduct.price * currentProduct.quantity,
    0
  );

  return (
    <div className={styles.shoppingCardContainer}>
      <h3>Shopping Cart</h3>
      {cartState.length === 0 && <p>No item added ...</p>}      
      {cartState !== undefined &&
        cartState.map((e, i) => {
          return (
            <div key={i} className={styles.productContainer}>
              <img src={e.image} alt={e.name} />
              <div className={styles.productName}>
                <h2>{e.name}</h2>
                <p>Qty: { e.quantity } x { e.price } =
                <span> { e.quantity * e.price } SEK</span></p>
              </div>
              <button onClick={() => removeProduct(e)}><i className="fa fa-trash"></i></button>
            </div>
          );
        })}
    
      {cartState.length > 0 && (
        <div className={styles.total}>
          <p>Total : <span>{totalPrice} SEK</span></p>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;