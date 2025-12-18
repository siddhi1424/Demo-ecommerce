import React, { useEffect, useState } from "react";
import styles from "./Productdata.module.css";
import Searchfilter from "./Searchfilter";

import Footer from "./Footer";

const ProductdataAPI = ({ addToCart }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  const searchfilter = (event) => {
    setFilter(
      data.filter((f) => f.category.toLowerCase().includes(event.target.value))
    );
  };

  const productdata = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const getdata = await response.json();
    setData(getdata);
    setFilter(getdata);
    console.log(getdata);
  };
  useEffect(() => {
    productdata();
  }, []);

  return (
    <div>
      <Searchfilter searchitem={searchfilter} />

      <div className={styles.productcontainer}>
        {filter.map((item) => {
          return (
            <div key={item.id} className={styles.card}>
              <h3>{item.category.toUpperCase()}</h3>
              <img src={item.image} />

              <h2>{item.title}</h2>
              {/* <p>{item.description}</p> */}
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to cart</button>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default ProductdataAPI;
