import styles from "./HomeHeader.module.css";
import { Link } from "react-router-dom";
import { memo } from "react";

export type HomeHeaderProps = {
    username: string;
};

export const HomeHeader = memo((props: HomeHeaderProps) => {
    const { username } = props;
    return (
        <div className={styles.homeHeader}>
            <div className={styles.title}>
                <div className={styles.name}>ARMAGGEDON V</div>
                <div className={styles.description}>
                    Сервис мониторинга и уничтожения астероидов, опасно
                    подлетающих к Земле.
                </div>
            </div>

            <div>
                <div className={styles.links}>
                    <Link
                        to={"/"}
                        className={styles.asteroidsLink}
                    >
                        Астероиды
                    </Link>
                    <Link
                        to={"/toDestroy"}
                        className={styles.destructionLink}
                    >
                        Уничтожение
                    </Link>
                </div>

                {username ? (
                    <div className={styles.centerDiv}>{username}</div>
                ) : (
                    <div className={styles.centerDiv}>
                        <Link to={"/login"} className={styles.loginLink}> Войти </Link>
                    </div>
                )}
            </div>
        </div>
    );
});
