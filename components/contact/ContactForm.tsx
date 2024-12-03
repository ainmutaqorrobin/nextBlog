import styles from "./ContactForm.module.css";
function ContactForm() {
  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form action="" className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              placeholder="user@gmail.com"
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              placeholder="Write your name here..."
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
