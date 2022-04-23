import { useEffect, useState } from "react";
import { ASTEROID_DISTANCE_MODE_KM, ASTEROID_SHOW_MODE_ALL } from "../AsteroidConstants/AsteroidConstants"
import { AsteroidCardList } from "../AsteroidCardList/AsteroidCardList";
import { Navbar } from "../Navbar/Navbar";

const MakeAsteroidsList = () =>{
    let monthNames=[
           'января',
           'февраля',
           'марта',
           'апреля',
           'мая',
           'июня',
           'июля',
           'августа',
           'сентября',
           'ноября',
           'декабря',
    ]
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        
    let list = []
    for(let i = 0; i < 10; i++){
        let year = "20" + (Math.random()*89 + 10).toFixed(0)
        let name = year + ' ' + characters[(Math.random()*25).toFixed(0)] + characters[(Math.random()*25).toFixed(0)]
        let date = (Math.random()*27 + 1).toFixed(0) + ' ' + monthNames[(Math.random()*11).toFixed(0)] + ' ' + year + " года"
        let grade = Math.random() < 0.5? "опасен":"не опасен";
        let size = (Math.random() * 100 + 10).toFixed(0)
        let distance = (Math.random() * 9000000 + 1000000).toFixed(0)
        list.push({
            name:name,
            date:date,
            grade:grade,
            size:size,
            distance:distance
        })
    }
    return list;
}

export const Home = () => {

    console.log(process.env.REACT_APP_SOME_VARIABLE)
    
    const [asteroidsList, setAsteroidsList] = useState(MakeAsteroidsList())
    const [showParams, setShowParams] = useState({
        distanceMode: ASTEROID_DISTANCE_MODE_KM,
        showMode: ASTEROID_SHOW_MODE_ALL
    })

    return <div>
        <Navbar showParams={showParams} setShowParams={setShowParams} />
        <AsteroidCardList list={asteroidsList} showParams={showParams} />
    </div>
}

