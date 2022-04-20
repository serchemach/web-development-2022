import styles from "./Action.module.css"

export const AsteroidCardAction = (props) =>{
    const {grade} = props;
    return (<div>
                <div className={styles.actionGrade}>Оценка: {grade}</div>
                <button className={styles.action}>
                    <div className={styles.actionText}>На уничтожение </div>
                </button>
            </div>)
}
