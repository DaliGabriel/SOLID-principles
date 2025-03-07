import { useEffect } from "react";

interface DataFetcherProps {
  url: string;
  onDataFetched: (data: any) => void;
}

function DataFetcher({ url, onDataFetched }: DataFetcherProps) {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        onDataFetched(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        //Handle error, perhaps call a error handling function passed as prop.
      }
    }
    fetchData();
  }, [url, onDataFetched]);

  return null;
}

export default DataFetcher;
