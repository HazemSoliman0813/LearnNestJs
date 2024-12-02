import { z } from "zod";

export const CreateLinuxDtoSchema = z.object({
  name: z.coerce.string().min(2).max(5),
  version: z.coerce.number().positive()
});

export type createLinuxZodDto = z.infer<typeof CreateLinuxDtoSchema>;