import styles from "./Navbar.module.css"
import { ASTEROID_DISTANCE_MODE_KM, ASTEROID_SHOW_MODE_ALL, ASTEROID_DISTANCE_MODE_LUNAR, ASTEROID_SHOW_MODE_DANGEROUS } from "../AsteroidConstants/AsteroidConstants"


export const Navbar = (props) => {
    const {showParams, setShowParams} = props

    const changeShowMode = (e) => {
        setShowParams({
            ...showParams,
            showMode: (e.target.checked)?ASTEROID_SHOW_MODE_DANGEROUS:ASTEROID_SHOW_MODE_ALL
        })
    }

    const changeDistanceModeToKm = () => {
        setShowParams({
            ...showParams,
            distanceMode: ASTEROID_DISTANCE_MODE_KM
        })
    }

    const changeDistanceModeToLunar = () => {
        setShowParams({
            ...showParams,
            distanceMode: ASTEROID_DISTANCE_MODE_LUNAR
        })
    }

    return <div className={styles.navbar}>
        <div className={styles.showDangerousOnly}>
            <input type="checkbox" value={showParams.showMode} onChange={changeShowMode}></input>
            Показать только опасные
        </div>

        <div className={styles.distanceMode}>
            Расстояние <button onClick={changeDistanceModeToKm} className={styles.distanceChooser + " " + (showParams.distanceMode===0?styles.activeMode:"")}> в километрах</button>
            , <button onClick={changeDistanceModeToLunar} className={styles.distanceChooser + " " + (showParams.distanceMode===1?styles.activeMode:"")}> в дистанциях до луны</button>
        </div>
    </div>
}
