import { SignupFormSchema, FormState } from "../lib/definitions";

export async function signup(state: FormState, formData: FormData) {
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

    const res = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify(validatedFields.data)
    })

    if (!res.ok) {
        return {
            message: 'An error occurred while creating account.'
        }
    }
}