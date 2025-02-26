import 'server-only'
import { getUser } from './dal'

export async function isAdmin() {
    const user = await getUser()
    return user?.isAdmin
}