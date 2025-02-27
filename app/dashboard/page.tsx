import styles from "./page.module.css";
import Navbar from "../components/navbar/navbar";
import { isAdmin } from "../lib/dto";
import UserDashboard from "../components/User Dashboard/userDashboard";


const Dashboard = async () => {
    const admin = await isAdmin()

    return (
        <main className={styles.main}>
            <Navbar />
            {admin ? 'admin' : <UserDashboard />}
        </main>
    )
}

export default Dashboard