import { useCallback, useState } from "react";
import DataFetcher from "./lib/DataFetcher";
import PostList from "./components/PostList/PostList";
import { Post } from "./types/Post";

function SingleResponsibilityPrinciple() {
  const [data, setData] = useState<Post[] | null>(null);

  const handleDataFetched = useCallback((fetchedData: Post[]) => {
    setData(fetchedData);
  }, []);

  return (
    <>
      <DataFetcher
        url="https://jsonplaceholder.typicode.com/posts"
        onDataFetched={handleDataFetched}
      />
      {data && <PostList posts={data} />}
    </>
  );
}

export default SingleResponsibilityPrinciple;
