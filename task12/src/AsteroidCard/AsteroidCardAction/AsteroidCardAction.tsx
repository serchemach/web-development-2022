import { emptyGlobalState } from "../../App";
import { ReducerAction } from "../../Reducer";
import { Asteroid } from "../AsteroidCard";
import styles from "./Action.module.css";

export type AsteroidCardActionProps = {
    asteroidData: Asteroid;
    dispatch: React.Dispatch<ReducerAction>;
};

export const AsteroidCardAction = (props: AsteroidCardActionProps) => {
    const { asteroidData, dispatch } = props;

    const SendToDestructionList = () => {
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
