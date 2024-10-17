import zod from 'zod';

export const userInputSchema = zod.object({
    email: zod.string().email(),
    password: zod.string(),
});