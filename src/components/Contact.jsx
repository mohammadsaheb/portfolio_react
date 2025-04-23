import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق إرسال النموذج
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <article id="contact" className="contact_contanier">
      <section className="title_contact"> 
        <h3>CONTACT</h3>
      </section>
      <section className="contact_cont">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea 
              name="message" 
              placeholder="Message" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className="send_message" type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </article>
  );
};

export default Contact;