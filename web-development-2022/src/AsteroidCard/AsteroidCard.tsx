import { useContext, useState } from "react";
import { AsteroidsContext, ViewContext } from "../App";
import { AsteroidApproachList } from "../AsteroidApproachList/AsteroidApproachList";
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
    id: string;
};

export const emptyAsteroid: Asteroid = {
    name: "",
    date: "",
    distance: 0,
    grade: "не опасен",
    size: 0,
    id: "",
};

export type AsteroidCardClickCallback = (card: Asteroid) => void;

export type AsteroidCardProps = Asteroid & {
    onClick?: AsteroidCardClickCallback;
};

export const AsteroidCard = (props: AsteroidCardProps) => {
    const { name, date, grade, distance, size, id, onClick } = props;
    const viewContext = useContext(ViewContext);
    const asteroidContext = useContext(AsteroidsContext);

    const [isExtended, setIsExtended] = useState(false);

    const clickHandler = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (onClick !== undefined) {
            onClick({
                name: name,
                date: date,
                grade: grade,
                distance: distance,
                size: size,
                id: id,
            });
        }

        if (isExtended) {
            setIsExtended(false);
        } else {
            setIsExtended(true);
        }
    };

    let colorStyle: string = "";
    if (grade === "опасен") {
        colorStyle = styles.cardRed;
    } else {
        colorStyle = styles.cardGreen;
    }

    let cardStyle: string = styles.card;
    if (isExtended) {
        cardStyle += " " + colorStyle + " " + styles.extendedCard;
        colorStyle += " " + styles.extendedSolver;
    }

    return (
        // ToDo: prevent extension when clicking the button for destruction
        <div className={cardStyle} onClick={clickHandler}>
            <div className={styles.adaptSolver + " " + colorStyle}>
                <AsteroidCardImage size={size} />
            </div>
            <AsteroidCardContent
                name={name}
                date={date}
                distance={distance}
                size={size}
                distanceMode={viewContext.state.distanceMode}
                asteroidId={id}
            />
            <AsteroidCardAction
                asteroidData={{
                    name: name,
                    date: date,
                    grade: grade,
                    size: size,
                    distance: distance,
                    id: id,
                }}
                dispatch={asteroidContext.dispatch}
            />

            {isExtended ? (
                <AsteroidApproachList
                    asteroidInfo={{
                        name: name,
                        date: date,
                        grade: grade,
                        size: size,
                        distance: distance,
                        id: id,
                    }}
                />
            ) : null}
        </div>
    );
};
