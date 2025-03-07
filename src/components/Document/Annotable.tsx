import Viewer from "./Viewer";
import { AnnotatableProps, ViewerProps } from "../../types/Document";
import styles from "./Document.module.css";

const Annotable = ({
  documentUrl,
  onAnnotate,
}: AnnotatableProps & ViewerProps) => {
  return (
    <div>
      <Viewer documentUrl={documentUrl} />
      <div className={styles.GenericButton}>
        <button onClick={() => onAnnotate("example annotation")}>
          Annotate
        </button>
      </div>
    </div>
  );
};

export default Annotable;
