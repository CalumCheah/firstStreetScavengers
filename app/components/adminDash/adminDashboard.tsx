'use client'

import Popup from "../popup/popup";
import ReservationCard from "../Reservation Card/reservationCard";
import styles from "./adminDashboard.module.css";

import { useState } from "react";

const AdminDashboard = () => {
    const [modifyItemsOpen, setModifyItemsOpen] = useState(false)

    return (
        <main className={styles.main}>
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