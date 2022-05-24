import { useContext, useEffect, useState } from "react";
import { GetAsteroidInfo } from "../ApiUtils";
import { AsteroidsContext } from "../App";
import { Asteroid } from "../AsteroidCard/AsteroidCard";
import { LoadCircle } from "../LoadCircle/LoadCircle";
import {
    ApproachElement,
    CloseApproach,
} from "./ApproachElement/ApproachElement";
import styles from "./AsteroidApproachList.module.css";

export type AsteroidApproachList = {
    asteroidInfo: Asteroid;
};

export const AsteroidApproachList = (props: AsteroidApproachList) => {
    const { asteroidInfo } = props;
    const { state, dispatch } = useContext(AsteroidsContext);

    const [isLoading, setIsLoading] = useState(true);
    const [closeApproaches, setCloseApproaches] = useState([]);

    useEffect(() => {
        GetAsteroidInfo(asteroidInfo.id, state.userProfile.apiKey).then(
            (response) =>
                response.json().then((asteroidData: any) => {
                    setIsLoading(false);
                    setCloseApproaches(
                        asteroidData.close_approach_data.map(
                            (item: any): CloseApproach => {
                                return {
                                    approachDate: item.close_approach_date,
                                    missDistanceKm:
                                        item.miss_distance.kilometers,
                                    orbitingBody: item.orbiting_body,
                                    relativeVelocityKmPerSecond:
                                        item.relative_velocity
                                            .kilometers_per_second,
                                };
                            }
                        )
                    );
                })
        );
    }, []);

    return (
        <div className={styles.pageContainer}>
            {/* ToDo: Make transition to here through passing onClick function
                to cards and making them look clickable (Very important) */}

            <LoadCircle isActive={isLoading} />

            {closeApproaches.map((item: CloseApproach) => (
                <ApproachElement approach={item} />
            ))}
        </div>
    );
};
