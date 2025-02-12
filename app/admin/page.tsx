import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/navbar/navbar";
import ReservationCard from "../components/Reservation Card/reservationCard";

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
        </main>
    )
}

export default AdminDashboard