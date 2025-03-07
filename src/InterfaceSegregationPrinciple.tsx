import Annotable from "./components/Document/Annotable";
import Download from "./components/Document/Download";
import Printable from "./components/Document/Printable";
import Viewer from "./components/Document/Viewer";

const InterfaceSegregationPrinciple = () => {
  const documentUrl = "https://example.com/document.pdf";

  const handlePrint = () => {
    console.log("Printing...");
  };
  const handleDownload = () => {
    console.log("Downloading...");
  };
  const handleAnnotate = (annotation: string) => {
    console.log("Annotating..." + annotation);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <Viewer documentUrl={documentUrl} />
      <Printable documentUrl={documentUrl} onPrint={handlePrint} />
      <Download documentUrl={documentUrl} onDownload={handleDownload} />
      <Annotable documentUrl={documentUrl} onAnnotate={handleAnnotate} />
    </div>
  );
};

export default InterfaceSegregationPrinciple;
