import styles from "./deleteMenu.module.css";

const DeleteMenu = () => {

    function remove() {
        var x = document.getElementById("mySelect");
        x?.remove();
    }

    

    return (
        <div className={styles.main}>
            <form className={styles.form}>
                <div className={styles.inventory}>
                </div>
                <button className={styles.submit} type="submit">Delete</button>
            </form>
        </div>
    )
}

export default DeleteMenu;