type FetchOptions = RequestInit & {
  url: string;
};

const fetcher = <ResponseBody>({ method = 'GET', ...args }: FetchOptions) => {
  return new Promise<ResponseBody>(async (resolve, reject) => {
    const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    const finalUrl = `${backendUrl}${args.url}`;

    const response = await fetch(finalUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      cache: args?.cache ?? args?.next ? undefined : 'no-store',
      ...args,
    });

    const data = await response.json();

    if (!response.ok) {
      reject(data);
    }

    resolve(data as ResponseBody);
  });
};

export default fetcher;
