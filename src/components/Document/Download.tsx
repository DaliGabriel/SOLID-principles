import { DownloadProps, ViewerProps } from "../../types/Document";
import Viewer from "./Viewer";
import styles from "./Document.module.css";

const Download = ({ documentUrl, onDownload }: ViewerProps & DownloadProps) => {
  return (
    <div>
      <Viewer documentUrl={documentUrl} />
      <div className={styles.GenericButton}>
        <button onClick={onDownload}>Download</button>
      </div>
    </div>
  );
};

export default Download;
