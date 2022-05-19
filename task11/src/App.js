import logo from "./logo.svg";
import "./App.css";
import { Button, SecondButton } from "./Button/Button";
import { ClassComponent } from "./ClassComponent/ClassComponent";
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./Home/Home";
import { AsteroidCard } from "./AsteroidCard/AsteroidCard";
import { createContext, useReducer, useEffect } from "react";
import { reducer } from "./Reducer";
import {
    ASTEROID_DISTANCE_MODE_KM,
    ASTEROID_SHOW_MODE_ALL,
} from "./AsteroidConstants/AsteroidConstants";
import { DestructionPage } from "./DestructionPage/DestructionPage";
import { ConvertAPIDataToList, GetAPIUrl, GetDefaultApiKey } from "./ApiUtils";
import { LoginPage } from "./LoginPage/LoginPage";

export const AsteroidsContext = createContext(null);

function App() {
    const [state, dispatch] = useReducer(reducer, {
        asteroidsList: [],
        destructionList: [],
        distanceMode: ASTEROID_DISTANCE_MODE_KM,
        showMode: ASTEROID_SHOW_MODE_ALL,
        userProfile: {
            name: "",
            apiKey: GetDefaultApiKey(),
        },
    });

    useEffect(() => {
        if (window.localStorage.getItem("customApiKey")) {
            dispatch({
                payload: {
                    name: window.localStorage.getItem("username"),
                    apiKey: window.localStorage.getItem("customApiKey"),
                },
                type: "SET_USER_PROFILE",
            });
        }

        fetch(GetAPIUrl(state.userProfile.apiKey))
            .then((response) =>
                response.json().then((resData) => {
                    dispatch({
                        payload: ConvertAPIDataToList(resData),
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
                        element={
                            <center>
                                <LoginPage />
                            </center>
                        }
                    />
                </Routes>
            </AsteroidsContext.Provider>
        </div>
    );
}

export default App;
