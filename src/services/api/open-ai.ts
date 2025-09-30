import { HttpService } from './api-services';
import API_URLS from './api-urls';
import {
  CONTEXT_CLASSIFIER_PROMPT,
  OPEN_AI_SERVICE,
  SYSTEM_PROMPT,
} from './constant';

export const OPENAISERVICE = {
  generateText: async (prompt: string, context?: string) => {
    const messages = [
      {
        role: OPEN_AI_SERVICE.SYSTEM_ROLE,
        content: SYSTEM_PROMPT,
      },
      {
        role: OPEN_AI_SERVICE.USER_ROLE,
        content: context ? `${prompt}\n\nContext: ${context}` : prompt,
      },
    ];

    const payload = {
      model: 'gpt-3.5-turbo',
      messages,
      max_tokens: 200,
      temperature: 1,
    };

    try {
      const response = await HttpService.post(API_URLS.OPENAI_API_URL, payload);
      return response.data;
    } catch (error) {
      console.error('OpenAI API error:', error);
      throw error;
    }
  },

  contextClassifier: async (context: string) => {
    const messages = [
      {
        role: OPEN_AI_SERVICE.SYSTEM_ROLE,
        content: CONTEXT_CLASSIFIER_PROMPT,
      },
      {
        role: OPEN_AI_SERVICE.USER_ROLE,
        content: context,
      },
    ];

    const payload = {
      model: OPEN_AI_SERVICE.MODEL,
      messages,
      max_tokens: OPEN_AI_SERVICE.MAX_TOKENS,
      temperature: OPEN_AI_SERVICE.TEMPERATURE,
    };

    try {
      const response = await HttpService.post(API_URLS.OPENAI_API_URL, payload);
      return response.data;
    } catch (error) {
      console.error('OpenAI API error:', error);
      throw error;
    }
  },
};
