import { neon } from "@neondatabase/serverless";
import styles from "./page.module.css"
import Link from "next/link";
import Navbar from "../components/navbar/navbar";

const SignUp = () => {

    return (
        <main className={styles.main}>
            <Navbar />
            <form className={styles.form} >
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
        </main>
    )
}

export default SignUp