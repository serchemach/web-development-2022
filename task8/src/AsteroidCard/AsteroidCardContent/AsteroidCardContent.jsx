import styles from "./AsteroidCardContent.module.css"

export const AsteroidCardContent = (props) =>{
    const {name, date, distance, size, distanceMode} = props
    return (<div>
                <div className={styles.contentName}>{name}</div>
                <div className={styles.contentWrapper}>
                    <div className={styles.contentDate}>Дата: {date}</div>
                    <div className={styles.contentDistance}>
                        Расстояние: {distanceMode?(distance/384400).toFixed(2):distance} {distanceMode?"дист. до луны":"км"}
                    </div>
                    <div className={styles.contentSize}>Размер: {size} м</div>
                </div>
            </div>)

}