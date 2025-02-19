import styles from "./page.module.css"

const SignUp = () => {
    return (
        <main className={styles.main}>
            <form className={styles.form}>
                <h1 className={styles.title}>Become a scavenger.</h1>
                <div className={styles.inputs}>
                    <label className={styles.label}>Email</label>
                    <input className={styles.textInput} type="text" id="email" name="email"/>
                    <label className={styles.label}>Password</label>
                    <input className={styles.textInput} type="text" id="password" name="password"/>
                </div>
                <button className={styles.submit} type="submit">Sign Up</button>
            </form>
        </main>
    )
}

export default SignUp