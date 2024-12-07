import styles from "./notification.module.css";

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

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
