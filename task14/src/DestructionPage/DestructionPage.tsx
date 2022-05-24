import { useContext } from "react";
import { AsteroidsContext } from "../App";
import { DestructionPageHeader } from "./DestructionPageHeader/DestructionPageHeader";
import styles from "./DestructionPage.module.css";
import { PageEnder } from "../PageEnder/PageEnder";
import { ViewContainer } from "../ViewContainer/ViewContainer";

export const DestructionPage = () => {
    const { state, dispatch } = useContext(AsteroidsContext);

    return (
        <div className={styles.destructionPage}>
            <DestructionPageHeader username={state.userProfile.name} />
            <div className={styles.line} />

            <ViewContainer list={state.destructionList} canLoad={false}/>

            <PageEnder />
        </div>
    );
};
