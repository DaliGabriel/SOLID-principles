interface RequestFactoryParams {
  url: string;
}

export default async ({ url }: RequestFactoryParams): Promise<JSON[]> => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
};
