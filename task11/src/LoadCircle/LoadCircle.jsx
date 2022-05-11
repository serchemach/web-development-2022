import styles from "./LoadCircle.module.css";

export const LoadCircle = (props) => {
    const { isActive } = props;
    if (isActive) {
        return (
            <div>
                <div className={styles.loadCirleContainer}>
                    <div className={styles.loadCircle}>
                        <div className={styles.loadInnerCircle}></div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};
