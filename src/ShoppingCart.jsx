import styles from "./styles/shoppingCard.module.css";
function ShoppingCart(props) {
  const setCartState = props.cartState;

  const totalPrice = setCartState.reduce(
    (total, currentPrice) => total + currentPrice.price * currentPrice.quantity,
    0
  );

  return (
    <>
      <h2>Shopping Card</h2>
      {setCartState !== undefined &&
        setCartState.map((e, i) => {
          console.log(e.quantity, e.price);
          return (
            <div key={i} className={styles.productContainer}>
              <img src={e.image} alt={e.name} />
              <div className={styles.productName}>
                <h2>{e.name}</h2>
                <span>
                  Qty: {e.quantity} x {e.price} =
                  {e.quantity && e.price ? e.quantity * e.price : 0} SEK
                </span>
              </div>
              <button onClick={() => props.removeProduct(e)}>Delete</button>
            </div>
          );
        })}
      {setCartState !== undefined && (
        <div>
          <p>Total :{totalPrice} SEK</p>
        </div>
      )}
    </>
  );
}

export default ShoppingCart;
