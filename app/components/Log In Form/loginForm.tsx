'use client'

import Link from "next/link"
import styles from "./loginForm.module.css"
import { login } from "@/app/actions/auth"
import { useActionState } from "react"

const LoginForm = () => {
    const [state, action] = useActionState(login, undefined)

    return (
        <form className={styles.form} action={action}>
            <h1 className={styles.title}>Ready to scavenge?</h1>
            <div className={styles.inputs}>
                <label className={styles.label}>Username</label>
                <input className={styles.textInput} type="text" id="username" name="username"/>
                {state?.errors?.username && <p>{state.errors.username}</p>}

                <label className={styles.label}>Password</label>
                <input className={styles.textInput} type="password" id="password" name="password"/>
                {state?.errors?.password && <p>{state.errors.password}</p>}
            </div>
            <button className={styles.submit} type="submit">Log In</button>
            <Link href={"/signup"} className={styles.signup}>Don't have an account? Sign Up.</Link>
        </form>
    )
}

export default LoginForm