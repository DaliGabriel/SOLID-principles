export interface ViewerProps {
  documentUrl: string;
}

export interface PrintableProps {
  onPrint: () => void;
}

export interface DownloadProps {
  onDownload: () => void;
}

export interface AnnotatableProps {
  onAnnotate: (annotation: string) => void;
}
