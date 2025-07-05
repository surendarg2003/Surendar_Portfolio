import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual service ID, template ID, and public key
    emailjs.sendForm('service_lbimc3t', 'template_f1ywfeu', e.target, '6QZICHCXFvge0WAMj')
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      }, (error) => {
        console.error(error.text);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <>
      <section className="contact-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="centered-title"
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="centered-message"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          If you'd like to get in touch, feel free to reach out via email or fill out the form below.
        </motion.p>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p><strong>Email:</strong> surendarg206@gmail.com</p>
          <p><strong>Phone:</strong> +91 6374229692</p>
          <p><strong>Location:</strong> Dindugul, Tamil Nadu, India</p>
        </div>

        {/* Contact Form */}
        <motion.form
          className="contact-form glowing-card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {!isSubmitted ? (
            <>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Message:
                <textarea
                  name="message"
                  rows="5"
                  value={formState.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>

              <button type="submit">Send Message</button>
            </>
          ) : (
            <div className="success-message">
              <h4>Thank You!</h4>
              <p>Your message has been sent successfully.</p>
            </div>
          )}
        </motion.form>
      </section>
    </>
  );
};

export default Contact;
