import { HttpService } from './api-services';
import API_URLS from './api-urls';

export const OPENAISERVICE = {
  generateText: async (prompt: string, context?: string) => {
    const messages = [
      {
        role: 'system',
        content:
          'You are an empathetic assistant helping citizens write clear, respectful applications for social support.',
      },
      {
        role: 'user',
        content: context ? `${prompt}\n\nContext: ${context}` : prompt,
      },
    ];

    const payload = {
      model: 'gpt-3.5-turbo',
      messages,
      max_tokens: 200,
      temperature: 0.7,
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
