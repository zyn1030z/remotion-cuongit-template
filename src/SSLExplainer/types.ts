import { z } from "zod";

export const sslExplainerSchema = z.object({
  title: z.string().default("SSL là gì?"),
  subtitle: z.string().default("Giải thích trong 50 giây"),
});

export type SSLExplainerProps = z.infer<typeof sslExplainerSchema>;
