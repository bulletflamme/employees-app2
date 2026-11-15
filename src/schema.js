import { z } from 'zod';

export const employeeSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Введите имя сотрудника')
    .min(2, 'Имя должно быть не короче 2 символов')
    .max(30, 'Имя должно быть не длиннее 30 символов')
    .regex(/^[A-Za-zА-Яа-яЁё\s-]+$/, 'Имя может содержать только буквы'),
  salary: z
    .string()
    .min(1, 'Введите зарплату')
    .refine((value) => Number(value) > 0, 'Зарплата должна быть больше нуля')
    .refine((value) => Number(value) <= 1000000, 'Зарплата не может быть больше 1000000$'),
});
