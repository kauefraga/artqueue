import { z } from 'zod';

export const CommissionSchema = z.object({
  id: z.coerce.number().int().nonnegative(),
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  twitter: z.string({ message: 'Arroba do Twitter inválido' }).optional(),
  price: z.coerce.number().nonnegative({ message: 'Preço não deve ser um número negativo' }),
  paymentStatus: z.enum(['not_paid', 'half_paid', 'paid'], { message: 'Etapa de pagamento deve ser "não pagou", "pagou metade" ou "pagou"' }),
  stage: z.enum(['in_queue', 'sketch', 'line', 'paint', 'finished'], { message: 'Etapa da encomenda deve ser "na fila", "esboço", "line", "pintura" ou "finalizada"' }),
  deadlineDate: z.coerce.date().optional(),
  createdAt: z.coerce.date().default(new Date()),
});

export type Commission = z.infer<typeof CommissionSchema>;

export const defaultCommission: Commission = {
  id: 1,
  name: '',
  twitter: '',
  price: 0,
  stage: 'in_queue',
  paymentStatus: 'not_paid',
  createdAt: new Date(),
  deadlineDate: new Date(),
};
