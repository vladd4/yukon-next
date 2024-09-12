import { z } from "zod";

export const formSchema = z.object({
  name: z.string(),
  email: z.string().email("Некоретна електронна пошта"),
  message: z.string(),
});

export type FormValues = z.infer<typeof formSchema>;

export const alertFormSchema = z.object({
  name: z.string(),
  phone: z
    .string()
    .min(10, { message: "Некоректний формат номеру!" })
    .max(13, { message: "Некоректний формат номеру!" }),
});

export type AlertFormValues = z.infer<typeof alertFormSchema>;
