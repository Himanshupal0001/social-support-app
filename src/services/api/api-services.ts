import axios, { type AxiosRequestConfig } from 'axios';

const baseURL = import.meta.env['VITE_BASE_URL'];
const accessToken = import.meta.env['VITE_OPENAI_API_KEY'];

const getInstance = () => {
  const instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  instance.interceptors.request.use((config) => {
    return config;
  });

  if (window && window.location) {
    instance.interceptors.response.use(
      (response: any) => {
        return response;
      },
      (error: any) => {
        if (error.response?.status === 401) {
          window.location.href = '/4001';
        }
        if (error.response?.status === 400) {
          window.location.href = '/400';
        }
        if (error.response?.status === 500) {
          window.location.href = '/500';
        }

        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          'Something went wrong';

        return Promise.reject(errorMessage);
      }
    );
  }

  return instance;
};

const get = (
  url: string,
  params: any = {},
  config: AxiosRequestConfig = {}
) => {
  return getInstance().get(url, { params, ...config });
};

const post = (
  url: string,
  data: any = {},
  params: any = {},
  config: AxiosRequestConfig = {}
) => {
  return getInstance().post(url, data, { params, ...config });
};

const put = (
  url: string,
  data: any = {},
  params: any = {},
  config: AxiosRequestConfig = {}
) => {
  return getInstance().put(url, data, { params, ...config });
};

const patch = (
  url: string,
  data: any = {},
  params: any = {},
  config: AxiosRequestConfig = {}
) => {
  return getInstance().patch(url, data, { params, ...config });
};

const remove = (
  url: string,
  params: any = {},
  data?: any,
  config: AxiosRequestConfig = {}
) => {
  return getInstance().delete(url, { params, data, ...config });
};

export const HttpService = {
  get,
  post,
  put,
  patch,
  delete: remove,
};
