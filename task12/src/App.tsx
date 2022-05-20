import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { createContext, useReducer, useEffect } from "react";
import { GlobalState, reducer, ReducerAction } from "./Reducer";
import {
    ASTEROID_DISTANCE_MODE_KM,
    ASTEROID_SHOW_MODE_ALL,
} from "./AsteroidConstants/AsteroidConstants";
import { DestructionPage } from "./DestructionPage/DestructionPage";
import { ConvertAPIDataToList, GetAPIUrl, GetDefaultApiKey } from "./ApiUtils";
import { LoginPage } from "./LoginPage/LoginPage";

export const emptyGlobalState: GlobalState = {
    asteroidsList: [],
    destructionList: [],
    distanceMode: ASTEROID_DISTANCE_MODE_KM,
    showMode: ASTEROID_SHOW_MODE_ALL,
    userProfile: {
        name: "",
        apiKey: GetDefaultApiKey(),
    },
}

export const AsteroidsContext = createContext({
    state: emptyGlobalState,
    dispatch: (value: ReducerAction) => {},
});

function App() {
    const [state, dispatch] = useReducer(reducer, emptyGlobalState);

    useEffect(() => {
        const storageName = window.localStorage.getItem("username");
        const storageApiKey = window.localStorage.getItem("customApiKey");
        if (storageApiKey != null && 
            storageName != null) {
            dispatch({
                payload: {
                    ...state,
                    userProfile: {
                        name: storageName,
                        apiKey: storageApiKey,
                }},
                type: "SET_USER_PROFILE",
            });
        }

        fetch(GetAPIUrl(state.userProfile.apiKey))
            .then((response) =>
                response.json().then((resData) => {
                    dispatch({
                        payload: {
                            ...state,
                            asteroidsList: ConvertAPIDataToList(resData),
                        },
                        type: "UPDATE_ASTEROIDS_LIST",
                    });
                })
            )
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <AsteroidsContext.Provider
                value={{ state: state, dispatch: dispatch }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="toDestroy" element={<DestructionPage />} />
                    <Route
                        path="login"
                        element={<LoginPage />}
                    />
                </Routes>
            </AsteroidsContext.Provider>
        </div>
    );
}

export default App;
