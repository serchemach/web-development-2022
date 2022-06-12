import { useContext } from "react";
import { AsteroidsContext } from "../App";
import styles from "./Home.module.css";
import { HomeHeader } from "./HomeHeader/HomeHeader";
import { PageEnder } from "../PageEnder/PageEnder";
import { ViewContainer } from "../ViewContainer/ViewContainer";

export const Home = () => {
    const { state, dispatch } = useContext(AsteroidsContext);

    return (
        <div className={styles.home}>
            {/* <LoadCircle isActive={true}/> */}
            <HomeHeader username={state.userProfile.name} />
            <div className={styles.line} />

            <ViewContainer list={state.asteroidsList} canLoad={true}/>

            <PageEnder />
        </div>
    );
};
