function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-left">
        <p className="section-tag">GET IN TOUCH</p>

        <h2>Let's Build Your Dream Space</h2>

        <p className="contact-text">
          Whether you're planning a residential, commercial or renovation
          project, we're ready to transform your ideas into timeless
          architectural designs.
        </p>

        <div className="contact-info">
          <p>📧 Jheriyxcrypt@gmail.com</p>
          <p>📞 +234  814 0004 768 /  09035161881</p>
          <p>📍 Lagos, Nigeria</p>
        </div>
      </div>

      <div className="contact-right">
        <form>
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Email Address" />

          <textarea
            rows="6"
            placeholder="Tell us about your project..."
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;