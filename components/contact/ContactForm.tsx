import { useEffect, useState } from "react";
import styles from "./ContactForm.module.css";
import { MessageData as FormData, RequestStatus } from "../../model";
import Notification, { NotificationProps } from "../notification/Notification";
function ContactForm() {
  const [status, setRequestStatus] = useState<RequestStatus | undefined>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [localForm, setLocalForm] = useState<FormData>({
    email: "",
    message: "",
    name: "",
  });

  const resetForm = (): void => {
    setLocalForm({
      email: "",
      message: "",
      name: "",
    });
  };

  function handleInput(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { id, value } = event.target;
    setLocalForm((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  async function sendContactData(contactDetails: FormData): Promise<void> {
    setRequestStatus(RequestStatus.pending);
    try {
      const response: Response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(contactDetails),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }
      setRequestStatus(RequestStatus.success);
      resetForm();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
      console.error("Error sending message", error);
      setRequestStatus(RequestStatus.error);
    }
  }

  async function sendMessageHandler(event: React.FormEvent<HTMLElement>) {
    event.preventDefault();
    await sendContactData(localForm);
  }

  let notification: NotificationProps | undefined;

  if (status === RequestStatus.pending) {
    notification = {
      status: RequestStatus.pending,
      message: "Sending message...",
      title: "Sending your message.",
    };
  }
  if (status === RequestStatus.success) {
    notification = {
      status: RequestStatus.success,
      message: "Message sent successfully!",
      title: "Success!",
    };
  }
  if (status === RequestStatus.error) {
    notification = {
      status: RequestStatus.error,
      message: errorMessage || "There is error sending your message.",
      title: "Error!",
    };
  }

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setRequestStatus(undefined);
        setErrorMessage(undefined);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

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
      {notification && (
        <Notification
          message={notification.message}
          status={notification.status}
          title={notification.title}
        />
      )}
    </section>
  );
}

export default ContactForm;
