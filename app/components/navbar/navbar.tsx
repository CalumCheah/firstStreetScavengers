import Link from "next/link";
import styles from "./navbar.module.css";
import { logout } from "@/app/actions/auth";
import { sessionExists } from "@/app/lib/dal";

const Navbar = async () => {
    const loggedIn = await sessionExists()

    return (
        <div className={styles.navbar}>
            <div className={styles.items}>
                <Link className={styles.title} href="/">FSS</Link>
                {loggedIn 
                ? (
                    <div className={styles.buttons}>
                        <button onClick={logout}>Log Out</button>
                    </div>
                ) 
                : (
                    <div className={styles.buttons}>
                        <Link href="/login">Log In</Link>
                        <Link href="/signup">Sign Up</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar