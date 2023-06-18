const SERVER_URL = process.env.SERVER_URL;

export async function fetchWrapper<T>(url: string, init?: RequestInit) {
  const response = await fetch(SERVER_URL + url, {
    ...init,
    next: { revalidate: 60 },
  });

  const data = (await response.json()) as T;

  return data;
}
