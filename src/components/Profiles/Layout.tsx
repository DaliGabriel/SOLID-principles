import { LayoutProps } from "../../types/User";
import styles from "./Profiles.module.css";

//This is the Shape component

const Layout = ({ user, onEdit, children }: LayoutProps) => {
  return (
    <div className={styles.userProfile}>
      <h2 className={styles.userName}>{user?.name}</h2>
      <p className={styles.userPhone}>{user?.phone}</p>
      <p className={styles.userEmail}>{user?.email}</p>

      {onEdit && user && <button onClick={() => onEdit(user.id)}>Edit</button>}
      {children}
    </div>
  );
};

export default Layout;
