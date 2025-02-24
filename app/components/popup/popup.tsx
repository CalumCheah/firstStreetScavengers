import { Dispatch, SetStateAction, useState } from "react";
import styles from "./popup.module.css";
import CreateMenu from "../modMenus/createMenu";
import DeleteMenu from "../modMenus/deleteMenu";

const Popup = ( {setPopupOpen}: {setPopupOpen: Dispatch<SetStateAction<boolean>>} ) => {

    const [modType, setModType] = useState("create")

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <div className={styles.barContainer}>
                    <button className={styles.close} onClick={()=>setPopupOpen(false)}>Close</button> 
                </div>
                
                <div className={styles.barContainer}></div>
                <div className={styles.barContainer}></div>
                
                <div className={styles.barButtonsContainer}>
                    <button className={styles.button} onClick={()=>setModType("create")}>Create Item</button>
                    <button className={styles.button} onClick={()=>setModType("delete")}>Delete Item</button>
                </div>
                
                <div className={styles.modContainer}>
                {modType == "create" 
                ? <CreateMenu />
                : <DeleteMenu />
                }
                </div>

            </div>
        </div>  
    )
}

export default Popup