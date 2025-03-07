import styles from "./Notification.module.css";

interface NotificationProps {
  title: string;
  message: string;
  type: "success" | "error" | "warning" | "default";
}

const notificationStyles: { [key: string]: string } = {
  success: "notification-success",
  error: "notification-error",
  warning: "notification-warning",
  default: "notification-default",
};

const Notification = ({ title, message, type }: NotificationProps) => {
  const className = notificationStyles[type] || notificationStyles.default;

  console.log(styles);

  return (
    <div className={styles[className]}>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
