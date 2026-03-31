import React from "react";
import styles from "./Header.module.css";

const Searchfilter = ({ searchitem }) => {
  return (
    <div styles={{ display: "flex" }}>
      <input type="text" placeholder="Search" onChange={searchitem} />
    </div>
  );
};

export default Searchfilter;
