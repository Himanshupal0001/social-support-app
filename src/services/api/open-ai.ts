import { HttpService } from './api-services';
import API_URLS from './api-urls';
import { OPEN_AI_SERVICE } from './constant';

const SYSTEM_PROMPT = `Act as a helpful assistant for social support applications. Your role is to help users describe their financial or personal situation accurately, clearly, and empathetically.

You must **only** respond to messages related to the user's application and personal situation (e.g., financial hardship, employment status, etc.).

If a user asks something irrelevant (e.g., stock prices, jokes, general chit-chat), politely redirect them by saying:

"I'm here to help you describe your situation for the social support application. Let’s stay focused so we can best assist you."

Keep your tone professional, friendly, and respectful.`;

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

  contextCLassifier: async (context: string) => {
    const messages = [
      {
        role: OPEN_AI_SERVICE.SYSTEM_ROLE,
        content: `Act as a classifier to classify the given context. If the given context is related to the user\'s application and personal situation return "true". If the given context is not related to the user\'s application and personal situation or the prompt looks like "I am poor, how to buy iphone" consider these kind of conversations off topic or personal chitchat, return "false". Moreover make
          the response more concise and to the point. with below checkpoints
          
- "true" → ONLY if it describes a **severe financial crisis** that impacts the user’s **basic survival** or their **dependents' wellbeing** (e.g., homelessness, inability to afford food, rent, medical care, or other essential needs)
-Genral request to write a paragraph for the user's application and personal situation return "true".

- "false" → For all other messages, including:
  - General financial worries (like debt or budgeting help)
  - Emotional struggles without clear financial crisis
  - Casual conversation, off-topic questions, or small talk
          `,
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
