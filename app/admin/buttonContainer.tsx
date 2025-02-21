'use client'

import styles from "./buttonContainer.module.css";
import Popup from "../components/popup/popup";
import { useState } from "react";

const ButtonContainer = () => {
    const [modifyItemsOpen, setModifyItemsOpen] = useState(false)

    return (

        <div className={styles.container}>
            <button className={styles.modButton}>
                Modify Items
            </button>
        </div>
    )
}

export default ButtonContainer