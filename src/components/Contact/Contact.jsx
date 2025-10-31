import React from "react";
import { useInView } from "react-intersection-observer";
import Button from "../ui/Button/Button";
import styles from "./Contact.module.css";

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  // Kita tidak perlu useState, handleChange, atau handleSubmit lagi!
  // Formspree menangani semuanya.

  return (
    <section
      id="contact"
      className={`section-padding ${inView ? "animate-fade-in" : ""}`}
      ref={ref}
    >
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <form
          className={styles.contactForm}
          action="https://formspree.io/f/mzzkjyqe"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
          ></textarea>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
