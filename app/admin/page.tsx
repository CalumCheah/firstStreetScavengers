'use client'

import styles from "./page.module.css";
import Navbar from "../components/navbar/navbar";
import ReservationCard from "../components/Reservation Card/reservationCard";
import Sidebar from "../components/sidebar/sidebar";
import Popup from "../components/popup/popup"
import { useState } from "react";

const items = await fetch('api/item')

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
            <div className={styles.container}>
                <button className={styles.modButton} onClick={()=>setModifyItemsOpen(!modifyItemsOpen)}>Modify Items</button>
                {modifyItemsOpen &&
                    <Popup 
                    setPopupOpen={setModifyItemsOpen} 
                    />
                }
            </div>    
        </main>
    )
}

export default AdminDashboard