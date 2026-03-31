import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Redefining Online Shopping</h1>
        <p>Smart filtering. Seamless experience. Faster decisions.</p>
      </section>

      {/* ABOUT */}
      <section className={styles.section}>
        <div className={styles.text}>
          <h2>Who We Are</h2>
          <p>
            We are a modern e-commerce platform focused on delivering a smooth
            and efficient shopping experience. Our goal is to simplify product
            discovery using smart filtering and dynamic UI.
          </p>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className={styles.flexSection}>
        <div>
          <h3>🎯 Our Mission</h3>
          <p>
            To create a fast, intuitive, and user-friendly platform where users
            can easily explore and purchase products.
          </p>
        </div>

        <div>
          <h3>🚀 Our Vision</h3>
          <p>
            To build scalable e-commerce solutions that provide real-world
            shopping experience using modern web technologies.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.grid}>
        <div className={styles.card}>
          <h3>⚡ Fast Performance</h3>
          <p>Optimized UI ensures smooth browsing experience.</p>
        </div>

        <div className={styles.card}>
          <h3>🛒 Smart Cart</h3>
          <p>Real-time cart updates with efficient state management.</p>
        </div>

        <div className={styles.card}>
          <h3>🔍 Advanced Filtering</h3>
          <p>Quickly find products using category & search filters.</p>
        </div>

        <div className={styles.card}>
          <h3>📱 Responsive Design</h3>
          <p>Works seamlessly across all devices.</p>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        <div>
          <h2>100+</h2>
          <p>Products</p>
        </div>

        <div>
          <h2>50+</h2>
          <p>Happy Users</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>Support</p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Start Exploring Now 🛍️</h2>
        <p>Discover products and enjoy a seamless shopping experience.</p>

        <Link to="/products">
          <button>Shop Now</button>
        </Link>
      </section>
    </div>
  );
};

export default About;
