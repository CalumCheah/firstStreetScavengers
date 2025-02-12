import Image from "next/image";
import styles from "./navbar.module.css";

const Navbar = () => {

    return (
        <div className={styles.navbar}>
           <a href="/">First Street Scavenger</a>
           <a>Sign Up</a>
        </div>
    )
}

export default Navbar