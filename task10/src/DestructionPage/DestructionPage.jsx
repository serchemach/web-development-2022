import { useContext } from "react";
import { AsteroidsContext } from "../App";
import { AsteroidCardList } from "../AsteroidCardList/AsteroidCardList";
import { DestructionPageHeader } from "./DestructionPageHeader/DestructionPageHeader";
import styles from "./DestructionPage.module.css";
import { Navbar } from "../Navbar/Navbar";

export const DestructionPage = () => {
  const { state, dispatch } = useContext(AsteroidsContext);

  return (
    <div className={styles.destructionPage}>
      <DestructionPageHeader />
      <div className={styles.line} />
      <Navbar
        showMode={state.showMode}
        distanceMode={state.distanceMode}
        dispatch={dispatch}
      />
      <AsteroidCardList list={state.destructionList} />
    </div>
  );
};
