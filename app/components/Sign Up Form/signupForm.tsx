'use client'

import { useActionState } from 'react'
import styles from './signupForm.module.css'
import { signup } from '@/app/actions/auth'

const SignupForm = () => {
    const [state, action] = useActionState(signup, undefined)

    return (
        <form className={styles.form} action={action}>
            <h1 className={styles.title}>Become a scavenger.</h1>
                <div className={styles.inputs}>
                    <label className={styles.label}>Username</label>
                    <input className={styles.textInput} type="text" id="username" name="username"/>
                    {state?.errors?.username && <p>{state.errors.username}</p>}

                    <label className={styles.label}>Password</label>
                    <input className={styles.textInput} type="password" id="password" name="password"/>
                    {state?.errors?.password && (
                        <div>
                            <p>Password must:</p>
                            <ul>
                                {state.errors.password.map((error) => (
                                    <li key={error}>- {error}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <label className={styles.label}>Contact Info</label>
                    <input className={styles.textInput} type="text" id="contactInfo" name="contactInfo" placeholder="e.g. IG tag, phone number, email"/>
                    {state?.errors?.contactInfo && <p>{state.errors.contactInfo}</p>}
                </div>
            <button className={styles.submit} type="submit">Sign Up</button>
        </form>
    )
}

export default SignupForm