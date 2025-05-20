function Services() {
    return (
      <main className="main-content">
        <div className="container">
          <h2 className="main-title">Our Services</h2>
          <section>
            <h3 className="main-title" style={{ fontSize: '1.5rem' }}>
              About Us
            </h3>
            <p className="main-text">
              Dog Cat Shop is dedicated to providing the best products and services for your pets. We love animals and strive to ensure their happiness and health.
            </p>
          </section>
          <section>
            <h3 className="main-title" style={{ fontSize: '1.5rem' }}>
              Contact & Support
            </h3>
            <p className="main-text">
              Email: <a href="mailto:info@dogcatshop.com">info@dogcatshop.com</a><br />
              Phone: +123-456-7890<br />
              Hours: Mon-Sat, 9AM-6PM
            </p>
          </section>
          <section>
            <h3 className="main-title" style={{ fontSize: '1.5rem' }}>
              Policies
            </h3>
            <p className="main-text">
              <strong>Return Policy:</strong> Returns accepted within 30 days with receipt.<br />
              <strong>Warranty:</strong> 1-year warranty on select products.<br />
              <strong>Payment:</strong> We accept credit cards, PayPal, and bank transfers.< dontbr />
              <strong>Shipping:</strong> Free shipping on orders over $50, delivery within 3-5 days.
            </p>
          </section>
        </div>
      </main>
    );
  }
  
  export default Services;