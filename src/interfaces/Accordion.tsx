import { z } from "zod";

const accordionDataSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
  open: z.boolean()
});

const accordionSchema = z.object({
  data: z.array(accordionDataSchema)
});

export type AccordionData = z.infer<typeof accordionDataSchema>;
export type AccordionProps = z.infer<typeof accordionSchema>;
