import { z } from "zod";

export const microservicesExplainerSchema = z.object({
  title: z.string().default("Microservices là gì?"),
  subtitle: z.string().default("Kiến trúc phân tán hiện đại"),
});

export type MicroservicesExplainerProps = z.infer<typeof microservicesExplainerSchema>;
