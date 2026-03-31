// About.jsx
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1>About Our Store</h1>

      <p>
        Welcome to <strong>EcoShop</strong> – your one-stop destination for
        quality products at affordable prices 🛒
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>🛍️ Our Mission</h3>
          <p>
            To provide a seamless shopping experience with modern UI and fast
            performance.
          </p>
        </div>

        <div className={styles.card}>
          <h3>⚡ Features</h3>
          <p>
            Product filtering, cart system, responsive design, and smooth user
            experience.
          </p>
        </div>

        <div className={styles.card}>
          <h3>💻 Tech Used</h3>
          <p>React.js, JavaScript, CSS Modules, API Integration</p>
        </div>
      </div>
    </div>
  );
};

export default About;
