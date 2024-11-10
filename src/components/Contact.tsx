import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import '../styles/contact.css'; // Import the custom CSS

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid">
        <div className="contact-info">
          <h2 className="contact-title" >Get in touch</h2>
          <p className="contact-text" data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message
          </p>
          <div className="contact-icons">
            <a href="mailto:alikhan.dec17@gmail.com" data-aos="zoom-in-up">
              <AiOutlineMail size={50} />
            </a>
            <a href="https://github.com/AliKhan17dec" target="_blank" data-aos="zoom-in-up">
              <FaGithub size={40} />
            </a>
            <a href="https://www.linkedin.com/in/ali-khan-8694162b7/" target="_blank" data-aos="zoom-in-up">
              <CiLinkedin size={50} />
            </a>
          </div>
        </div>
        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="input-field" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" className="input-field" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="msg">Message</label>
            <textarea className="textarea-field" id="msg" rows={8}></textarea>
          </div>
          <button className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
