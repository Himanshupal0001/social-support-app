import { ERROR_MESSAGES } from '@/lib/enums/enum';
import axios, { type AxiosRequestConfig } from 'axios';

export enum ValidErrorStatus {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

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

  instance.interceptors.request.use(
    (config) => {
      const token = accessToken;
      if (token) {
        return config;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  if (window && window.location) {
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
        const status = error.response?.status;

        if (status && Object.values(ValidErrorStatus).includes(status)) {
          window.location.href = `/error/${status}`;
        }

        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          ERROR_MESSAGES.SUBMISSION_ERROR;

        return Promise.reject(errorMessage);
      }
    );
  }

  return instance;
};

export const isValidErrorStatus = (
  status: string | undefined
): status is string => {
  if (!status) return false;
  const statusNum = parseInt(status, 10);
  return Object.values(ValidErrorStatus).includes(statusNum);
};

const get = (
  url: string,
  params: Record<string, unknown> = {},
  config: AxiosRequestConfig = {}
) => {
  return getInstance().get(url, { params, ...config });
};

const post = (
  url: string,
  data: unknown = {},
  params: unknown = {},
  config: AxiosRequestConfig = {}
) => {
  return getInstance().post(url, data, { params, ...config });
};

const put = (
  url: string,
  data: unknown = {},
  params: unknown = {},
  config: AxiosRequestConfig = {}
) => {
  return getInstance().put(url, data, { params, ...config });
};

const patch = (
  url: string,
  data: unknown = {},
  params: unknown = {},
  config: AxiosRequestConfig = {}
) => {
  return getInstance().patch(url, data, { params, ...config });
};

const remove = (
  url: string,
  params: unknown = {},
  data?: unknown,
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
