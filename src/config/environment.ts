import { z } from 'zod';

const environmentSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  NEXT_PUBLIC_ANI_JOURNEY_API_URL: z.string().url(),
});

const environment = environmentSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_ANI_JOURNEY_API_URL: process.env.NEXT_PUBLIC_ANI_JOURNEY_API_URL,
});

export default environment;
