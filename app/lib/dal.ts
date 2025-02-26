'use server'

import 'server-only'

import { cookies } from 'next/headers'
import { decrypt } from './session'
import { redirect } from 'next/navigation'
import { cache } from 'react'
import { neon } from '@neondatabase/serverless';

export const verifySession = cache(async () => {
    const cookie = (await cookies()).get('session')?.value
    const session = await decrypt(cookie)

    if (!session?.userId) {
        redirect('/login')
    }

    return { isAuth: true, userId: session.userId}
})

export const getUser = cache(async () => {
    const session = await verifySession()
    if (!session) return null

    try {
        const sql = neon(`${process.env.DATABASE_URL}`);
        const data = await sql(`SELECT "username", "contactInfo", "isAdmin" FROM "first-street-scavengers"."User" WHERE "id"='${session.userId}'`)

        const user = data[0]

        return user
    } catch {
        console.log('Failed to fetch user')
        return null
    }
})

export const sessionExists = cache(async () =>{
    const cookieStore = await cookies()
    return cookieStore.has('session')
})