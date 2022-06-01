import { useContext } from "react";
import { AsteroidCardList } from "../AsteroidCardList/AsteroidCardList";
import { Navbar } from "../Navbar/Navbar";
import { AsteroidsContext } from "../App";
import styles from "./Home.module.css";
import { HomeHeader } from "./HomeHeader/HomeHeader";
import { LoadCircle } from "../LoadCircle/LoadCircle";

export const Home = () => {
    const { state, dispatch } = useContext(AsteroidsContext);

    return (
        <div className={styles.home}>
            {/* <LoadCircle isActive={true}/> */}
            <HomeHeader username={state.userProfile.name} />
            <div className={styles.line} />
            <Navbar
                showMode={state.showMode}
                distanceMode={state.distanceMode}
                dispatch={dispatch}
            />

            {state.asteroidsList.length === 0 ? (
                <LoadCircle isActive={true} />
            ) : (
                <AsteroidCardList list={state.asteroidsList} />
            )}
        </div>
    );
};
