import { ZodError, ZodSchema } from 'zod';

export const ValidateSchema = (props: {
  schema: ZodSchema;
  criteria: unknown;
}):
  | { success: true; data: unknown }
  | { success: false; error: ZodError<unknown> } => {
  const { schema, criteria } = props;
  const result = schema.safeParse(criteria);
  return {
    ...result,
  };
};
