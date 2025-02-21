import { neon } from "@neondatabase/serverless";
import styles from "./page.module.css"
import Navbar from "../components/navbar/navbar";
import SignupForm from "../components/Sign Up Form/signup-form";

const SignUp = () => {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.signup}>
                <SignupForm />
            </div>
        </main>
    )
}

export default SignUp