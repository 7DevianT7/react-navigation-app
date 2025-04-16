import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="section-title">CONTACT US</h1>
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <p className="info-description">
            Leave me a message or connect via phone or email. I’ll get back to you as soon as possible.
          </p>
          <div className="info-block">
            <i className="fas fa-phone"></i>
            <div>
              <p>+123-3456-7891</p>
              <p>+123-3456-7892</p>
            </div>
          </div>
          <div className="info-block">
            <i className="fas fa-envelope"></i>
            <div>
              <p>demoemail@demo.com</p>
              <p>demo02@demo.com</p>
            </div>
          </div>
          <div className="info-block">
            <i className="fas fa-map-marker-alt"></i>
            <p>121 King Street, Melbourne, United States</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Enter your name..." required />
          <input type="email" placeholder="Enter your email..." required />
          <input type="text" placeholder="Enter subject..." required />
          <textarea placeholder="Enter your message..." required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
