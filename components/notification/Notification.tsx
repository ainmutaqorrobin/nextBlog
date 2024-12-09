import styles from "./Notification.module.css";
import ReactDom from "react-dom";

export interface NotificationProps {
  title: string;
  message: string;
  status: "success" | "error" | "pending";
}
function Notification({ message, status, title }: NotificationProps) {
  let statusClasses: string = "";

  if (status === "success") {
    statusClasses = styles.success;
  }

  if (status === "error") {
    statusClasses = styles.error;
  }

  const cssClasses: string = `${styles.notification} ${statusClasses}`;

  const notificationElement = document.getElementById("notifications");

  if (!notificationElement) {
    return null;
  }

  return ReactDom.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    notificationElement
  );
}

export default Notification;
