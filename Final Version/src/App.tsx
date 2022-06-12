import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { createContext, useReducer, useEffect } from "react";
import {
    AsteroidsReducer,
    AsteroidReducerAction,
    emptyGlobalState,
    emptyViewState,
    ViewReducerAction,
} from "./Reducers";
import { DestructionPage } from "./DestructionPage/DestructionPage";
import { ConvertAPIDataToList, GetAPIUrl } from "./ApiUtils";
import { LoginPage } from "./LoginPage/LoginPage";

export const AsteroidsContext = createContext({
    state: emptyGlobalState,
    dispatch: (value: AsteroidReducerAction) => {},
});

export const ViewContext = createContext({
    state: emptyViewState,
    dispatch: (value: ViewReducerAction) => {},
});

function App() {
    const [state, dispatch] = useReducer(AsteroidsReducer, emptyGlobalState);

    useEffect(() => {
        const storageName = window.localStorage.getItem("username");
        const storageApiKey = window.localStorage.getItem("customApiKey");
        let usedKey = state.userProfile.apiKey;
        if (storageApiKey !== null && storageName !== null) {
            dispatch({
                payload: {
                    ...state,
                    userProfile: {
                        name: storageName,
                        apiKey: storageApiKey,
                    },
                },
                type: "SET_USER_PROFILE",
            });
            usedKey = storageApiKey;
        }

        fetch(GetAPIUrl(usedKey))
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
                    <Route path="login" element={<LoginPage />} />
                </Routes>
            </AsteroidsContext.Provider>
        </div>
    );
}

export default App;
