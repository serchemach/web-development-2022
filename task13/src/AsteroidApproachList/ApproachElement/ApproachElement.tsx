import styles from "./ApproachElement.module.css";

export type CloseApproach = {
    approachDate: string;
    missDistanceKm: number;
    orbitingBody: string;
    relativeVelocityKmPerSecond: number;
};

export type ApproachElementProps = {
    approach: CloseApproach;
};

export const ApproachElement = (props: ApproachElementProps) => {
    const { approach } = props;
    return (
        <div className={styles.approach}>
            <div className={styles.date}>
                {" "}
                Дата сближения: {approach.approachDate}
            </div>
            <div className={styles.body}>
                Астероид сблизился на {approach.missDistanceKm} км
            </div>
            <div className={styles.body}>
                Центр орбиты: {approach.orbitingBody}
            </div>
            <div className={styles.body}>
                Скорость сближения: {approach.relativeVelocityKmPerSecond} км/ч
            </div>
        </div>
    );
};
