import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ fullname: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const endpoint = "https://formspree.io/f/xeedkqjq";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.fullname,
          email: form.email,
          message: form.message
        })
      });

      if (res.ok) {
        setStatus("success");
        setForm({ fullname: "", email: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus(data.error || "error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <article className="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
              value={form.fullname}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email Address"
              required
              data-form-input
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input=""
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button className="form-btn" type="submit" disabled={submitting || !form.fullname || !form.email || !form.message} data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>{submitting ? "Sending..." : "Send Message"}</span>
          </button>

          {status === "success" && (
            <p className="form-success" role="status" style={{ color: 'green', marginTop: '1em' }}>
              ✅ Thank you — your message has been sent!
            </p>
          )}
          {status && status !== "success" && (
            <p className="form-error" role="alert" style={{ color: 'red', marginTop: '1em' }}>
              ❌ There was an error sending your message. Please try again later.
            </p>
          )}
        </form>
      </section>
    </article>
  );
};

export default Contact;
