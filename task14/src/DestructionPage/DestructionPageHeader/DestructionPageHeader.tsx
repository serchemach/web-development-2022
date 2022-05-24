import styles from "./DestructionPageHeader.module.css";
import { Link } from "react-router-dom";
import { memo } from "react";

export type DestructionPageHeaderProps = {
    username: string;
};

export const DestructionPageHeader = memo(
    (props: DestructionPageHeaderProps) => {
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
                            style={{ color: "black", marginRight: "20px" }}
                        >
                            Астероиды
                        </Link>
                        <Link
                            to={"/toDestroy"}
                            style={{
                                textDecoration: "none",
                                color: "black",
                                fontWeight: "bold",
                            }}
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
    }
);
