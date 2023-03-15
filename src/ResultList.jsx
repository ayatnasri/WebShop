import Modal from "./Modal";
import { useState } from "react";
import styles from "./styles/resultList.module.css";
import Stars from "./Stars";

function ResultList({product, onClickAdd}) {
  const [modalState, setModalState] = useState(false); // To show Modal pop_up component

  const openModalPopUp = () => {                       // When click on More information button =>
    setModalState(true);                               //  Open the Modal
  };
  const handelonClose = () => {                        // When click on X i Modal => 
    setModalState(false);                              // Close the Modal
  };

  return (
    <>
      <Modal toggle={modalState} onClose={handelonClose}>
        <h2> {product.name}</h2>
        <img src={product.image} alt={product.name} />
        <ul>
          <li><span>Price : </span>{product.price} SEK </li>
          <li><span> Product's number: </span>{product.id}</li>
          <li><span>Description : </span><p>{product.description}</p></li>
        </ul>
      </Modal>

      <div className={styles.product}>
        <img className={styles.img} src={product.image} alt={product.name} />

        <div className={styles.productList}>
          <div className={styles.productName}>
            <h3>{product.name}</h3>
            <button className={styles.moreInfoBtn} onClick={openModalPopUp}>More Information</button>
            <Stars />
          </div>

          <div className={styles.productPrice}>
            <span>{product.price} SEK</span>
            <button onClick={() => { onClickAdd(product); }} > Add to cart </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultList;
