import React from 'react';
import { motion } from 'framer-motion';
import './Publications.css';

const Publications = () => {
  const publications = [
    {
      title: "ONLINE APPLICATION FOR PARKING SLOT REGISTRATION",
      journal: "Journal of Xidian University",
      description: "An UGC-CARE Approved Group 2 Journal",
      volume: "VOLUME 18, ISSUE 4, 2024"
    }
  ];

  return (
    <section className="publications-section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="main-heading"
      >
        Publications
      </motion.h2>

      <div className="publication-list">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            className="publication-card glowing-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <a href="https://drive.google.com/file/d/1RnMIPtAEL6gJcWxJEWAXEggAyhzaGsH7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              {pub.title}
            </a>
            <p><strong>{pub.journal}</strong></p>
            <p>{pub.description}</p>
            <p>{pub.volume}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Publications;