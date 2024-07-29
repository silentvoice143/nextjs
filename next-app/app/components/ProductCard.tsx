import React from "react";
import AddtoCartbtn from "./AddtoCartbtn";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <h1>Product Card</h1>
      <AddtoCartbtn />
    </div>
  );
};

export default ProductCard;
