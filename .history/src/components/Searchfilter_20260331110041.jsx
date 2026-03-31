import React from "react";
import styles from "./Header.module.css";

const Searchfilter = ({ searchitem }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
      }}
    >
      <input type="text" placeholder="Search" onChange={searchitem} />
    </div>
  );
};

export default Searchfilter;
