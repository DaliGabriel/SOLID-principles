import { ViewerProps } from "../../types/Document";
import styles from "./Document.module.css";

const Viewer = ({ documentUrl }: ViewerProps) => {
  return (
    <div className={styles.viewerIframe}>
      <iframe src={documentUrl} title="Document Viewer" />
    </div>
  );
};

export default Viewer;
