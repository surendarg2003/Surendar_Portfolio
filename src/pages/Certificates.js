import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
  const certs = [
    {
      title: "Android Studio",
      issuer: "Udemy / Google",
      date: "Completed 2024",
      description: "Proficient in building Android apps using Java and Kotlin."
    },
    {
      title: "Blockchain Technology",
      issuer: "Coursera",
      date: "Completed 2023",
      description: "Understanding blockchain fundamentals, Bitcoin, Ethereum, and smart contracts."
    },
    {
      title: "Ethical Hacking",
      issuer: "Cybrary",
      date: "Completed 2023",
      description: "Basics of penetration testing, network security, and ethical hacking practices."
    },
    {
      title: "Big Data Security & Cloud Privacy",
      issuer: "edX",
      date: "Completed 2024",
      description: "Learned about data protection, encryption, and secure cloud computing."
    }
  ];

  return (
    <>
      <section className="certificates-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <div className="certificates-grid">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card glowing-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3><FaCertificate style={{ marginRight: '8px', color: '#00ffcc' }} />{cert.title}</h3>
              <p><strong>Issuer:</strong> {cert.issuer}</p>
              <p><strong>Date:</strong> {cert.date}</p>
              <p>{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Certificates;
