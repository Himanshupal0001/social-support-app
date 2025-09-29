export type TErrors = {
  networkError: string;
  invalidContext: string;
  classificationError: string;
  submissionError: string;
  parserError: string;
  somethingWentWrong: string;
  noFound: string;
  error401: {
    code: number;
    title: string;
    message: string;
  };
  error400: {
    code: number;
    title: string;
    message: string;
  };
  error404: {
    code: number;
    title: string;
    message: string;
  };
  error500: {
    code: number;
    title: string;
    message: string;
  };
};
