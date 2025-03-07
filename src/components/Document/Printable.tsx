import { PrintableProps, ViewerProps } from "../../types/Document";
import Viewer from "./Viewer";
import styles from "./Document.module.css";

const Printable = ({ onPrint, documentUrl }: PrintableProps & ViewerProps) => {
  return (
    <div>
      <Viewer documentUrl={documentUrl} />
      <div className={styles.GenericButton}>
        <button onClick={onPrint}>Print</button>
      </div>
    </div>
  );
};

export default Printable;
