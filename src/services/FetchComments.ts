import RequestFactory from "../lib/RequestFactory"; // Adjust the path as needed
import { Comment } from "../types/Comment";

export const fetchComments = async (): Promise<Comment[]> => {
  try {
    const data = await RequestFactory({
      url: "https://jsonplaceholder.typicode.com/comments",
    });
    return data as unknown as Comment[];
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error; // Re-throw the error for the calling component to handle
  }
};
