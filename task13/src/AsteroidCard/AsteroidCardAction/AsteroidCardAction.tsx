import { AsteroidReducerAction, emptyGlobalState } from "../../Reducers";
import { Asteroid } from "../AsteroidCard";
import styles from "./Action.module.css";

export type AsteroidCardActionProps = {
    asteroidData: Asteroid;
    dispatch: React.Dispatch<AsteroidReducerAction>;
};

export const AsteroidCardAction = (props: AsteroidCardActionProps) => {
    const { asteroidData, dispatch } = props;

    const SendToDestructionList = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        // So that the card doesn't extend when clicking the button
        event.stopPropagation();

        dispatch({
            payload: {
                ...emptyGlobalState,
                destructionList: [asteroidData],
            },
            type: "ADD_TO_DESTRUCTION_LIST",
        });
    };

    return (
        <div>
            <div className={styles.actionGrade}>
                Оценка: {asteroidData.grade}
            </div>
            <button className={styles.action} onClick={SendToDestructionList}>
                <div className={styles.actionText}>На уничтожение </div>
            </button>
        </div>
    );
};
