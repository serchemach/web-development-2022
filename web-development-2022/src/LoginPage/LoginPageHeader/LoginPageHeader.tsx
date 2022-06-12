import styles from "./LoginPageHeader.module.css";
import { Link } from "react-router-dom";

export const LoginPageHeader = () => {
    return (
        <div className={styles.loginPageHeader}>
            <div className={styles.title}>
                <div className={styles.name}>ARMAGGEDON V</div>
                <div className={styles.description}>
                    Сервис мониторинга и уничтожения астероидов, опасно
                    подлетающих к Земле.
                </div>
            </div>

            <div className={styles.linksFit}>
                <div className={styles.links}>
                    <Link
                        to={"/"}
                        style={{
                            color: "black",
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

                <Link
                    to={"/login"}
                    style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bold",
                    }}
                >
                    {" "}
                    Войти{" "}
                </Link>
            </div>
        </div>
    );
};
