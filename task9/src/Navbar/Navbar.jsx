import styles from "./Navbar.module.css"
import { ASTEROID_DISTANCE_MODE_KM, ASTEROID_SHOW_MODE_ALL, ASTEROID_DISTANCE_MODE_LUNAR, ASTEROID_SHOW_MODE_DANGEROUS } from "../AsteroidConstants/AsteroidConstants"


export const Navbar = (props) => {
    const {showMode, distanceMode, dispatch} = props

    const changeShowMode = (e) => {
        dispatch({
            payload:(e.target.checked)?ASTEROID_SHOW_MODE_DANGEROUS:ASTEROID_SHOW_MODE_ALL,
            type:"CHANGE_SHOW_MODE" 
        })
    }

    const changeDistanceModeToKm = () => {
        dispatch({
            payload: ASTEROID_DISTANCE_MODE_KM,
            type:"CHANGE_DISTANCE_MODE" 
        })
    }

    const changeDistanceModeToLunar = () => {
        dispatch({
            payload: ASTEROID_DISTANCE_MODE_LUNAR,
            type:"CHANGE_DISTANCE_MODE" 
        })
    }
    console.log(showMode)

    return <div className={styles.navbar}>
        <div className={styles.showDangerousOnly}>
            <input type="checkbox" checked={showMode} onChange={changeShowMode}></input>
            Показать только опасные
        </div>

        <div className={styles.distanceMode}>
            Расстояние <button onClick={changeDistanceModeToKm} className={styles.distanceChooser + " " + (distanceMode===ASTEROID_DISTANCE_MODE_KM?styles.activeMode:"")}> в километрах</button>
            , <button onClick={changeDistanceModeToLunar} className={styles.distanceChooser + " " + (distanceMode===ASTEROID_DISTANCE_MODE_LUNAR?styles.activeMode:"")}> в дистанциях до луны</button>
        </div>
    </div>
}
