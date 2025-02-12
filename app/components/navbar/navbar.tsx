import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {

    return (
        <div className={styles.navbar}>
           <Link href="/">First Street Scavenger</Link>
        </div>
    )
}

export default Navbar