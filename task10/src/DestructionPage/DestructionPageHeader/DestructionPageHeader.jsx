import styles from "./DestructionPageHeader.module.css";
import { Link } from "react-router-dom";

export const DestructionPageHeader = () => {
  return (
    <div className={styles.homeHeader}>
      <div className={styles.title}>
        <div className={styles.name}>ARMAGGEDON V</div>
        <div className={styles.description}>
          Сервис мониторинга и уничтожения астероидов, опасно подлетающих
          к Земле.
        </div>
      </div>

      <div className={styles.links}>
        <Link to={"/"} style={{ color: "black", marginRight: "20px" }}>
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
    </div>
  );
};
