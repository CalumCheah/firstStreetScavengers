'use client'

import Link from "next/link"
import styles from "./login-form.module.css"
import { login, signup } from "@/app/actions/auth"
import { useActionState } from "react"

const LoginForm = () => {
    const [state, action, pending] = useActionState(login, undefined)

    return (
        <form className={styles.form} action={action}>
            <h1 className={styles.title}>Ready to scavenge?</h1>
            <div className={styles.inputs}>
                <label className={styles.label}>Username</label>
                <input className={styles.textInput} type="text" id="username" name="username"/>
                <label className={styles.label}>Password</label>
                <input className={styles.textInput} type="password" id="password" name="password"/>
            </div>
            <button className={styles.submit} type="submit">Log In</button>
            <Link href={"/signup"} className={styles.signup}>Don't have an account? Sign Up.</Link>
        </form>
    )
}

export default LoginForm