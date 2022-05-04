import styles from "./Action.module.css"

export const AsteroidCardAction = (props) =>{
    const {asteroidData, dispatch} = props;

    const SendToDestructionList = () =>{
        dispatch({
            payload: asteroidData,
            type: "ADD_TO_DESTRUCTION_LIST"
        })
    }

    return (<div>
                <div className={styles.actionGrade}>Оценка: {asteroidData.grade}</div>
                <button className={styles.action} onClick={SendToDestructionList}>
                    <div className={styles.actionText}>На уничтожение </div>
                </button>
            </div>)
}
