import styles from "./page.module.css";
import Navbar from "../components/navbar/navbar";
import ReservationCard from "../components/Reservation Card/reservationCard";
import Sidebar from "../components/sidebar/sidebar";
import { isAdmin } from "../lib/dto";


const Dashboard = async () => {
    const admin = await isAdmin()

    return (
        <main className={styles.main}>
            {admin ? 'admin' : 'not admin'}
        </main>
    )
}

export default Dashboard