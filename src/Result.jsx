import Modal from "./Modal";
import { useState } from "react";
import styles from "./styles/result.module.css";

function SearchResult(props) {
  let product = props.product;
  const [modalState, setModalState] = useState(false);

  const openModalPopUp = () => {
    setModalState(true);
  };
  const handelonClose = () => {
    setModalState(false);
  };
  return (
    <>
      <Modal toggle={modalState} onClose={handelonClose}>
        <h2> {product.name}</h2>
        <img src={product.image} alt={product.name} />
        <ul>
          <li>
            <span> Product id :</span> {product.id}
          </li>
          <li>
            <span>Price : </span>
            {product.price}
          </li>
          <li>
            <p>
              <span>Description : </span> {product.description}
            </p>
          </li>
        </ul>
      </Modal>

      <div className={styles.product}>
        <img className={styles.img} src={product.image} alt={product.name} />

        <div className={styles.productList}>
          <div className={styles.productName}>
            <h3>{product.name}</h3>
            <button className={styles.moreInfoBtn} onClick={openModalPopUp}>
              More Info
            </button>
          </div>

          <div className={styles.productPrice}>
            <span>{product.price}</span>
            <button
              onClick={() => {
                props.onClickAdd(product);
              }}
            >
              Add to card
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResult;

/*
import "./App.css";
import { Link } from "react-router-dom";

function SearchResult(props) {
  let product = props.product;

  return (
    <div className="product">
      <img className="img" src={product.image} alt={product.name} />
      <div className="product-list">
        <div className="product-name">
          <h3>{product.name}</h3>
          <Link className="more" to={`/producter/${product.id}`}>
            More information
          </Link>
        </div>

        <div className="product-price">
          <span>{product.price}</span>
          <button>Add to card</button>
        </div>
      </div>
    </div>
  );
}

export default SearchResult; */

/************************************************************************************** */
/*
   import "./App.css";
import { Link } from "react-router-dom";

function SearchResult(props) {
  const filterProducter = props.products.filter((p) => {
    return (
      p.name.toLowerCase().includes(props.sendSearchResult.toLowerCase()) ||
      p.description.toLowerCase().includes(props.sendSearchResult.toLowerCase())
    );
  });

  return (
    <div className="producter-container">
      {filterProducter.map((p) => (
        <div key={p.id} className="product">
          <img className="img" src={p.image} alt={p.name} />
          <div className="product-list">
            <div className="product-name">
              <h3>{p.name}</h3>
              <Link className="more" to={`/products/${p.id}`}>
                More information
              </Link>
            </div>

            <div className="product-price">
              <span>{p.price}</span>
              <button>Add to card</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
*/
