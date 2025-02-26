import styles from "./page.module.css"
import Navbar from "../components/navbar/navbar";
import LoginForm from "../components/Log In Form/loginForm";

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