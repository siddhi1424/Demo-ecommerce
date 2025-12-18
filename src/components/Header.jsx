import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import styles from "./Header.module.css";
import { Link, Router } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Searchfilter from "./Searchfilter";

const Header = ({ totalitem }) => {
  const [showmenu, setMenu] = useState(false);
  const handlemenubutton = () => {
    setMenu(!showmenu);
  };
  //search
  const searchfilter = (event) => {
    setFilter(
      data.filter((f) => f.category.toLowerCase().includes(event.target.value))
    );
  };
  return (
    <div>
      <header className={styles.header}>
        <div>
          <h1>EcosShop</h1>
        </div>
        <div>
          <Searchfilter searchitem={searchfilter} />
        </div>
        <div className={styles.navLinks}>
          <nav className={`${styles.navpages} ${showmenu ? styles.show : ""}`}>
            <Link to="/About"> About </Link>
            <Link to="/Category"> Category </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/Cart">
              <FaCartArrowDown size={20} />
              {totalitem > 0 && (
                <span className={styles.cartBadge}>{totalitem}</span>
              )}
            </Link>
          </nav>
          <div>
            <button className={styles.hammenu} onClick={handlemenubutton}>
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
