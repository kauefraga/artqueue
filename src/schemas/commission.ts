import { z } from 'zod';

export const CommissionSchema = z.object({
  id: z.coerce.number().int().positive(),
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  twitter_url: z.url({ message: 'URL do Twitter inválida' }).optional(),
  price: z.coerce.number().positive({ message: 'Preço deve ser um número positivo' }),
  paymentStatus: z.enum(['pagou', 'não pagou'], { message: 'Status de pagamento deve ser "pagou" ou "não pagou"' }),
  stage: z.enum(['esboço', 'finalizada'], { message: 'Estágio deve ser "esboço" ou "finalizado"' }),
  deadlineDate: z.date().optional(),
  createdAt: z.coerce.date().default(new Date()),
});

export type Commission = z.infer<typeof CommissionSchema>;
