import styles from './HomeHeader.module.css'
import { Link } from 'react-router-dom';


export const HomeHeader = () => {
    return <div className={styles.homeHeader}>
        <div className={styles.title}>
            <div className={styles.name}>ARMAGGEDON V</div>
            <div className={styles.description}>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</div>
        </div>
        
        <div className={styles.links}>
            <Link to={'/'} style={{ textDecoration: 'none', color: "black", fontWeight: "bold"}}>Астероиды</Link>
            <Link to={'/toDestroy'} style={{ color: "black", marginLeft: "20px"}}>Уничтожение</Link>
        </div>
    </div>
}