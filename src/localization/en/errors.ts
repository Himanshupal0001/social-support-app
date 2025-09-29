import type { TErrors } from '../types/errors';

export const errors: TErrors = {
  networkError: 'Network error. Please try again.',
  invalidContext:
    'Please provide information related to your social support application.',
  classificationError: 'Unable to process your input. Please try again.',
  submissionError:
    'There was an error submitting your application. Please try again later.',
  parserError: 'Failed to parse saved form data',
  somethingWentWrong: 'Something went wrong',
  noFound: 'Page not found',
  error401: {
    code: 401,
    title: 'Unauthorized',
    message:
      'You are not authorized to access this resource. Please log in or check your credentials.',
  },
  error404: {
    code: 404,
    title: 'Not Found',
    message:
      'The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
  },
  error500: {
    code: 500,
    title: 'Internal Server Error',
    message:
      "Something went wrong on our end. We're working to fix this issue. Please try again later.",
  },
  error400: {
    code: 400,
    title: 'Bad Request',
    message:
      'The request you made was invalid or malformed. Please check your input and try again.',
  },
};
