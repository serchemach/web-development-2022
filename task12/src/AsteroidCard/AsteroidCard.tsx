import { useContext } from "react";
import { AsteroidsContext } from "../App";
import { AsteroidCardAction } from "./AsteroidCardAction/AsteroidCardAction";
import { AsteroidCardContent } from "./AsteroidCardContent/AsteroidCardContent";
import { AsteroidCardImage } from "./AsteroidCardImage/AsteroidCardImage";
import styles from "./Card.module.css";

export type Asteroid = {
    name: string;
    date: string;
    grade: "опасен" | "не опасен";
    distance: number;
    size: number;
};

export const AsteroidCard = (props: Asteroid) => {
    const { name, date, grade, distance, size } = props;
    const { state, dispatch } = useContext(AsteroidsContext);

    return (
        <div className={styles.card}>
            <div
                className={
                    grade === "опасен"
                        ? styles.adaptSolver + " " + styles.cardRed
                        : styles.adaptSolver
                }
            >
                <AsteroidCardImage size={size} />
            </div>
            <AsteroidCardContent
                name={name}
                date={date}
                distance={distance}
                size={size}
                distanceMode={state.distanceMode}
            />
            <AsteroidCardAction
                asteroidData={{
                    name: name,
                    date: date,
                    grade: grade,
                    size: size,
                    distance: distance,
                }}
                dispatch={dispatch}
            />
        </div>
    );
};
