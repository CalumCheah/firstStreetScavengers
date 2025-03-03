import { z } from 'zod'

export const SignupFormSchema = z.object({
    username: z
        .string()
        .min(2, { message: 'Username must be 2 characters long.' })
        .trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
        message: 'Contain at least one special character.',
        })
        .trim(),
    contactInfo: z
        .string()
        .trim(),
})

export const LoginFormSchema = z.object({
    username: z
        .string()
        .min(2, { message: 'Username must be 2 characters long.' })
        .trim(),
    password: z
        .string()
        .min(8, { message: 'Passowrd must be at least 8 characters long' })
        .trim(),
})

export type SignupFormState =
    | {
        errors?: {
            username?: string[],
            password?: string[]
            contactInfo?: string[]
        }
        message?: string
     }
    | undefined

export type LoginFormState =
| {
    errors?: {
        username?: string[],
        password?: string[]
    }
    message?: string
    }
| undefined

export type SessionPayload =
     | {
        userId: string
        expiresAt: Date
     }
    | undefined

export type User =
     {
        id?: string
        username: string
        contactInfo: string
        isAdmin?: boolean
        password?: string
     }