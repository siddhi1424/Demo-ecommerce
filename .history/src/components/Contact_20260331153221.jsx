// Contact.jsx
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
    alert("Message sent successfully 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.container}>
      {/* HEADING */}
      <h1>Contact Us</h1>
      <p className={styles.subtitle}>
        Have any questions or feedback? We'd love to hear from you 💬
      </p>

      <div className={styles.wrapper}>
        {/* LEFT SIDE INFO */}
        <div className={styles.info}>
          <h3>📍 Address</h3>
          <p>Mumbai, India</p>

          <h3>📧 Email</h3>
          <p>support@shop.com</p>

          <h3>📞 Phone</h3>
          <p>+91 9876543210</p>

          <h3>⏰ Support Hours</h3>
          <p>Mon - Sat (10 AM - 6 PM)</p>
        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            value={form.message}
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
