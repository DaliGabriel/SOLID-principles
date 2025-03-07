import styles from "./Shadow.module.css";

interface ShadowProps {
  children: React.ReactNode;
}

const Shadow = ({ children }: ShadowProps) => {
  return <div className={styles.shadowWrapper}>{children}</div>;
};

export default Shadow;
