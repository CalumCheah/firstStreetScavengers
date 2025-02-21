import { Dispatch, SetStateAction, useState } from "react";
import styles from "./popup.module.css";
import CreateMenu from "../modMenus/createMenu";
import DeleteMenu from "../modMenus/deleteMenu";

const Popup = ( {setPopupOpen}: {setPopupOpen: Dispatch<SetStateAction<boolean>>} ) => {

    const [modType, setModType] = useState("create")

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <button className={styles.close} onClick={()=>setPopupOpen(false)}>Close</button> 
                <button className={styles.button} onClick={()=>setModType("create")}>Create Item</button>
                <button className={styles.button} onClick={()=>setModType("delete")}>Delete Item</button>

                {modType == "create" 
                ? <CreateMenu />
                : <DeleteMenu />
                }

            </div>
        </div>  
    )
}

export default Popup