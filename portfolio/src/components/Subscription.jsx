import { useState } from "react";

function Subscription() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("Please enter your email address.");
      return;
    }

    if (!email.includes("@")) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setStatus("success");
    setEmail("");
  };

  return (
    <section className="subscription" id="subscribe">
      <div className="subscription-content">
        <span className="subscription-label">STAY UPDATED</span>

        <h2>
          Stay in the <span>loop.</span>
        </h2>

        <p>
          Get notified about new projects, design work, announcements,
          and other updates from AVIN CONSTRUCTION LIMITED.
        </p>

        <form onSubmit={handleSubmit} className="subscription-form">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <p className="subscription-success">
            ✓ You're subscribed! We'll keep you updated.
          </p>
        )}

        {status && status !== "success" && (
          <p className="subscription-error">
            {status}
          </p>
        )}
      </div>
    </section>
  );
}

export default Subscription;