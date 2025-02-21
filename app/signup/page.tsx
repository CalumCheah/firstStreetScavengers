import { neon } from "@neondatabase/serverless";
import styles from "./page.module.css"
import Navbar from "../components/navbar/navbar";

const SignUp = () => {
    const createUser = (formData: FormData) => {
       
    }

    return (
        <main className={styles.main}>
            <Navbar />
            <form className={styles.form} >
                <h1 className={styles.title}>Become a scavenger.</h1>
                <div className={styles.inputs}>
                    <label className={styles.label}>Username</label>
                    <input className={styles.textInput} type="text" id="username" name="username"/>
                    <label className={styles.label}>Password</label>
                    <input className={styles.textInput} type="password" id="password" name="password"/>
                    <label className={styles.label}>Contact Info</label>
                    <input className={styles.textInput} type="text" id="contact" name="contact" placeholder="e.g. IG tag, phone number, email"/>
                </div>
                <button className={styles.submit} type="submit">Sign Up</button>
            </form>
        </main>
    )
}

export default SignUp