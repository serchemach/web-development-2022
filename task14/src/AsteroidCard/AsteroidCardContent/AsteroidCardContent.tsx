import { Link } from "react-router-dom";
import styles from "./AsteroidCardContent.module.css";

export type AsteroidCardContentProps = {
    name: string;
    date: string;
    distance: number;
    size: number;
    distanceMode: number;
    asteroidId: string;
};

export const AsteroidCardContent = (props: AsteroidCardContentProps) => {
    const { name, date, distance, size, distanceMode, asteroidId } = props;
    return (
        <div>
            <div className={styles.contentName}>{name}</div>
            <div className={styles.contentWrapper}>
                <div className={styles.contentDate}>Дата: {date}</div>
                <div className={styles.contentDistance}>
                    Расстояние:{" "}
                    {distanceMode
                        ? (distance / 384400).toFixed(2)
                        : (distance * 1).toFixed(2)}{" "}
                    {distanceMode ? "дист. до луны" : "км"}
                </div>
                <div className={styles.contentSize}>
                    Размер: {size.toFixed(2)} м
                </div>
            </div>
        </div>
    );
};
