import { useContext } from "react";
import { AsteroidsContext } from "../App";
import { DestructionPageHeader } from "./DestructionPageHeader/DestructionPageHeader";
import styles from "./DestructionPage.module.css";
import { PageEnder } from "../PageEnder/PageEnder";
import { ViewContainer } from "../ViewContainer/ViewContainer";
import { emptyGlobalState } from "../Reducers";

export const DestructionPage = () => {
    const { state, dispatch } = useContext(AsteroidsContext);

    const onDestructionCall = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch({
            type: "EMPTY_DESTRUCTION_LIST",
            payload: emptyGlobalState,
        })
    }

    return (
        <div className={styles.destructionPage}>
            <DestructionPageHeader username={state.userProfile.name} />
            <div className={styles.line} />

            <ViewContainer list={state.destructionList} canLoad={false}/>

            <button className={styles.action} onClick={onDestructionCall}> 
                Заказ бригады им. Брюса Уиллиса 
            </button>
            <PageEnder />
        </div>
    );
};
