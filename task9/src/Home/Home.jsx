import {  useContext, useEffect, useState } from "react";
import { ASTEROID_DISTANCE_MODE_KM, ASTEROID_SHOW_MODE_ALL } from "../AsteroidConstants/AsteroidConstants"
import { AsteroidCardList } from "../AsteroidCardList/AsteroidCardList";
import { Navbar } from "../Navbar/Navbar";
import { GetAPIUrl, ConvertAPIDataToList } from "./ApiUtils";
import { AsteroidsContext } from "../App";
import styles from "./Home.module.css"
import { HomeHeader } from "./HomeHeader/HomeHeader";

export const Home = () => {
    const {state, dispatch} = useContext(AsteroidsContext)

    return <div className={styles.home}>
            <HomeHeader />
            <div className={styles.line} />
            <Navbar showMode={state.showMode} distanceMode={state.distanceMode} dispatch={dispatch} />
            <AsteroidCardList list={state.asteroidsList} />
        </div>
    
}

