// About.jsx
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      {/* HERO */}
      <div className={styles.hero}>
        <h1>Your Shopping, Simplified 🛒</h1>
        <p>Discover amazing products at the best prices</p>
      </div>

      {/* ABOUT */}
      <div className={styles.section}>
        <h2>Who We Are</h2>
        <p>
          We are an online store dedicated to providing quality products with a
          seamless shopping experience. Our platform focuses on simplicity,
          speed, and customer satisfaction.
        </p>
      </div>

      {/* WHY US */}
      <div className={styles.section}>
        <h2>Why Choose Us?</h2>
        <div className={styles.cards}>
          <div>⚡ Fast Delivery</div>
          <div>🔒 Secure Payment</div>
          <div>💯 Quality Products</div>
          <div>📦 Easy Returns</div>
        </div>
      </div>
    </div>
  );
};

export default About;
