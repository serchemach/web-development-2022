import { useContext, useReducer } from "react";
import { AsteroidsContext, ViewContext } from "../App";
import { Asteroid } from "../AsteroidCard/AsteroidCard";
import { AsteroidCardList } from "../AsteroidCardList/AsteroidCardList";
import { LoadCircle } from "../LoadCircle/LoadCircle";
import { Navbar } from "../Navbar/Navbar";
import { emptyViewState, ViewReducer } from "../Reducers";

export type ViewContainerProps = {
    list: Asteroid[];
    canLoad: boolean;
}

export const ViewContainer = (props: ViewContainerProps) => {
    const { list, canLoad } = props;
    const [state, dispatch] = useReducer(ViewReducer, emptyViewState);

    return (
        <ViewContext.Provider
            value={{
                state: state,
                dispatch: dispatch,
            }}
        >
            <Navbar
                showMode={state.showMode}
                distanceMode={state.distanceMode}
                dispatch={dispatch}
            />

            {list.length === 0 ? (
                <LoadCircle isActive={canLoad} />
            ) : (
                <AsteroidCardList list={list} />
            )}
        </ViewContext.Provider>
    );
};
