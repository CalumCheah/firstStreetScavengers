import { neon } from "@neondatabase/serverless";
import styles from "./page.module.css"
import Link from "next/link";
import Navbar from "../components/navbar/navbar";
import LoginForm from "../components/Log In Form/login-form";

const SignUp = () => {

    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.login}>
                <LoginForm />
            </div>
        </main>
    )
}

export default SignUp