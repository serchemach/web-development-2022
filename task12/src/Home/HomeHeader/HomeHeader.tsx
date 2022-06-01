import styles from "./HomeHeader.module.css";
import { Link } from "react-router-dom";

export type HomeHeaderProps = {
    username: string;
};

export const HomeHeader = (props: HomeHeaderProps) => {
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
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontWeight: "bold",
                        }}
                    >
                        Астероиды
                    </Link>
                    <Link
                        to={"/toDestroy"}
                        style={{ color: "black", marginLeft: "20px" }}
                    >
                        Уничтожение
                    </Link>
                </div>

                {username ? (
                    <div className={styles.centerDiv}>{username}</div>
                ) : (
                    <div className={styles.centerDiv}>
                        <Link to={"/login"}> Войти </Link>
                    </div>
                )}
            </div>
        </div>
    );
};
