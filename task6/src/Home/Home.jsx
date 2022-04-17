import { useEffect, useState } from "react";
import { AsteroidCard } from "../AsteroidCard/AsteroidCard"
import styles from  "./Home.module.css"

export const Home = () => {
    const [asteroids, setAsteroids] = useState([]);
    useEffect(()=>{
        setAsteroids([{name: "2021 FQ", date: "12 сентября 2021", grade:"опасен", size:5, distance:9331775},
         {name: "2021 ER", date:"11 ноября 2022", grade:"не опасен", size:10, distance:7235024},
         {name: "2022 QQ", date:"3 марта 2022", grade:"не опасен", size:10, distance:2866012}])
    }, [])

    return <div>
        Home
        <div className={styles.showDangerousOnly}><input type="checkbox"></input> Показать только опасные</div>
        <div className={styles.distanceMode}>Расстояние <strong>в километрах</strong>, в дистанциях до луны</div>
        {asteroids.map((item)=><div><AsteroidCard name={item.name} grade={item.grade} date={item.date} distance={item.distance} size={item.size}/></div>)}
    </div>
}