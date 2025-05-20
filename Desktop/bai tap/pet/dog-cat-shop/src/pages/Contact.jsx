function Contact() {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Form submitted! (This is a demo)');
    };
  
    return (
      <main className="main-content">
        <div className="container">
          <h2 className="main-title">Contact Us</h2>
          <p className="main-text">
            Have questions? Fill out the form below to get in touch!
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </main>
    );
  }
  
  export default Contact;