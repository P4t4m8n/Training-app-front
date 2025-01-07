/* eslint-disable no-useless-catch */
const BASE_URL = "http://10.0.0.3:3030/api/";
type TApiService = {
  get<T>(endpoint: string, data?: unknown): Promise<T>;
  post<T>(endpoint: string, data?: unknown): Promise<T>;
  put<T>(endpoint: string, data?: unknown): Promise<T>;
  delete<T>(endpoint: string, data?: unknown): Promise<T>;
};
type TMethod = "GET" | "POST" | "PUT" | "DELETE";
export const apiService: TApiService = {
  get(endpoint, data) {
    return ajax(endpoint, "GET", data);
  },
  post(endpoint, data) {
    return ajax(endpoint, "POST", data);
  },
  put(endpoint, data) {
    return ajax(endpoint, "PUT", data);
  },
  delete(endpoint, data) {
    return ajax(endpoint, "DELETE", data);
  },
};

const ajax = async <T>(
  endpoint: string,
  method: TMethod = "GET",
  data: unknown = null
): Promise<T> => {
  try {
    const url = `${BASE_URL}${endpoint}`;
    const options: RequestInit = {
      method,
      credentials: "include",
      headers: {
        ...(data instanceof FormData
          ? {}
          : { "Content-Type": "application/json" }),
      },
    };

    if (method !== "GET" && data) {
      if (data instanceof FormData) {
        options.body = data;
      } else {
        options.body = JSON.stringify(data);
      }
    } else if (method === "GET" && data) {
      const queryParams = new URLSearchParams(data as Record<string, string>);
      endpoint += `?${queryParams.toString()}`;
    }

    const res = await fetch(url, options);
    if (!res.ok) {
      //Validation Error
      if (res.status === 422) {
        //TODO: Handle validation error
      } else {
        throw new Error(res.statusText);
      }
    }

    return (await res.json()) as T;
  } catch (err) {
    throw err;
  }
};