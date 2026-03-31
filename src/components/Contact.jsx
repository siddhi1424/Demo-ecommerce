import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent 🚀");
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Let’s Talk</h1>
        <p>Have questions or feedback? Our team is here to help you.</p>

        <div className={styles.details}>
          <p>📍 Mumbai, India</p>
          <p>📧 support@shop.com</p>
          <p>📞 +91 9876543210</p>
        </div>
      </div>

      <div className={styles.right}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
