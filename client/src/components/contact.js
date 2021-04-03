import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2>Contact Us</h2>
          <p className="hint-text">Contact us.</p>
          <div className="form-group">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputMessage">Message</label>
            <textarea
              className="form-control"
              id="inputMessage"
              rows="2"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            <i className="fa fa-paper-plane"></i> Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
