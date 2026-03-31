import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Redefining Online Shopping</h1>
        <p>Seamless experience. Smart filtering. Faster decisions.</p>
      </section>

      {/* ABOUT */}
      <section className={styles.section}>
        <div className={styles.text}>
          <h2>Who We Are</h2>
          <p>
            We are a modern e-commerce platform designed to simplify your
            shopping experience. From dynamic filtering to smooth cart
            management, everything is built for speed and usability.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.grid}>
        <div className={styles.card}>
          <h3>⚡ Fast Experience</h3>
          <p>Optimized UI for quick browsing and filtering.</p>
        </div>

        <div className={styles.card}>
          <h3>🛒 Smart Cart</h3>
          <p>Real-time cart updates with smooth interactions.</p>
        </div>

        <div className={styles.card}>
          <h3>🔍 Advanced Search</h3>
          <p>Find products instantly with dynamic filtering.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
