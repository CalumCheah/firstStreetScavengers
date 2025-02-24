import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.items}>
                <Link className={styles.title} href="/">FSS</Link>
                <div className={styles.buttons}>
                    <Link href="/login">Log In</Link>
                    <Link href="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar