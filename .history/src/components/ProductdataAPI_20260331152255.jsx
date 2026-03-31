import React, { useEffect, useState } from "react";
import styles from "./Productdata.module.css";
import Searchfilter from "./Searchfilter";
import Footer from "./Footer";

const ProductdataAPI = ({ addToCart }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  const searchfilter = (event) => {
    const value = event.target.value.toLowerCase();

    setFilter(data.filter((f) => f.category.toLowerCase().includes(value)));
  };

  const productdata = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const getdata = await response.json();

      setData(getdata.products);
      setFilter(getdata.products);

      console.log(getdata.products);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
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

              <img src={item.thumbnail} alt={item.title} />

              <h2>{item.title}</h2>
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
