import { z } from 'zod';

const QueryParamsSchema = z.object({
  username: z.string(),
});

export type QueryParams = z.infer<typeof QueryParamsSchema>;
