import styles from "./page.module.css";
import Navbar from "../components/navbar/navbar";
import ReservationCard from "../components/Reservation Card/reservationCard";
import Sidebar from "../components/sidebar/sidebar";

const AdminDashboard = () => {

    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.content}>
                <ReservationCard
                    name="john"
                    contact="john@gmail"
                    product="dior jacket"
                 />
                <ReservationCard
                    name="john"
                    contact="john@gmail"
                    product="yzy pods"
                 />
            </div>
            <Sidebar />
        </main>
    )
}

export default AdminDashboard