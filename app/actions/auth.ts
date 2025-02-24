'use server'
import { redirect } from "next/navigation";
import { SignupFormSchema, SignupFormState, LoginFormSchema, LoginFormState } from "../lib/definitions";
import { createSession } from '@/app/lib/session'
import { neon } from '@neondatabase/serverless';

const sql = neon(`${process.env.DATABASE_URL}`);
const bcrypt = require('bcrypt')

export async function signup(state: SignupFormState, formData: FormData) {
    const validatedFields = SignupFormSchema.safeParse({
        username: formData.get('username'),
        password: formData.get('password'),
        contactInfo: formData.get('contactInfo'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const hashedPass = await bcrypt.hash(validatedFields.data.password, 3)
    await sql(`INSERT INTO "first-street-scavengers"."User" ("username", "contactInfo", "password") VALUES ('${validatedFields.data.username}', '${validatedFields.data.contactInfo}', '${hashedPass}')`)
    const data = await sql(`SELECT "id", "username", "contactInfo" FROM "first-street-scavengers"."User" WHERE "username"='${validatedFields.data.username}'`)

    const user = data[0]

    await createSession(user.id)
    redirect('/')
}

export async function login(state: LoginFormState, formData: FormData) {
    const validatedFields = LoginFormSchema.safeParse({
        username: formData.get('username'),
        password: formData.get('password'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const data = await sql(`SELECT "password", "id" FROM "first-street-scavengers"."User" WHERE "username"='${validatedFields.data.username}'`)
    const user = data[0]

    const validPass: boolean = await bcrypt.compare(validatedFields.data.password, user.password)

    if (!validPass) {
        return {
            message: "Incorrect username or passowrd.",
        }
    }

    await createSession(user.id)
    redirect('/')
}