import { useState } from "react";
import styles from "./ContactForm.module.css";
import { MessageData as FormData } from "../../model";
function ContactForm() {
  const [localForm, setLocalForm] = useState<FormData>({
    email: "",
    message: "",
    name: "",
  });

  function handleInput(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { id, value } = event.target;
    setLocalForm((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  function sendMessageHandler(event: React.FormEvent<HTMLElement>): void {
    event.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(localForm),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              placeholder="user@gmail.com"
              value={localForm.email}
              onChange={handleInput}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              placeholder="Write your name here..."
              value={localForm.name}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Write your message here..."
            value={localForm.message}
            onChange={handleInput}
            required
          ></textarea>

          <div className={styles.actions}>
            <button>Send Message</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
