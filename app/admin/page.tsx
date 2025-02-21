'use client'

import styles from "./page.module.css";
import Navbar from "../components/navbar/navbar";
import ReservationCard from "../components/Reservation Card/reservationCard";
import Sidebar from "../components/sidebar/sidebar";
import ButtonContainer from "./buttonContainer";
import { useState } from "react";

const AdminDashboard = () => {
    const [modifyItemsOpen, setModifyItemsOpen] = useState(false)

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
            <ButtonContainer />
        </main>
    )
}

export default AdminDashboard