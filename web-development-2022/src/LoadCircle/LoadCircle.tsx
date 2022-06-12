import styles from "./LoadCircle.module.css";

export type LoadCircleProps = {
    isActive: boolean;
};

export const LoadCircle = (props: LoadCircleProps) => {
    const { isActive } = props;
    if (isActive) {
        return (
            <div>
                <div className={styles.loadCirleContainer}>
                    <div className={styles.loadCircle}>
                        <div className={styles.loadInnerCircle} />
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};
