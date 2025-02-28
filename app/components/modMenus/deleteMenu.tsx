import { useEffect, useState } from "react";
import styles from "./deleteMenu.module.css";

interface Item {
    title: string,
    description: string,
    imagePath: string
    id: string
  }
  

const DeleteMenu = () => {
    const [data, setData] = useState<Item[]>(); // based on your data you should store it here in state
    const [isLoading, setLoading] = useState(true)
  
    useEffect(() => {
      fetch('/api/item')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
  
    }, []);
  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No Profile Data</p>
  
    
    return (
        <div className={styles.main}>
            <form className={styles.form}>
                <div className={styles.inventory}>
                    {data.map((item: Item) => {
                        return (
                            <div key={item.id}>{item.title}</div>
                        )
                    })}
                </div>
                <button className={styles.submit} type="submit">Delete</button>
            </form>
        </div>
    )
}

export default DeleteMenu;