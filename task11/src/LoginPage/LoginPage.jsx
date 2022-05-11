import { useContext, useState } from "react";
import { ConvertAPIDataToList, ValidateApiKey } from "../ApiUtils";
import { LoadCircle } from "../LoadCircle/LoadCircle";
import styles from "./LoginPage.module.css";
import { LoginPageHeader } from "./LoginPageHeader/LoginPageHeader";
import { GetAPIUrl } from "../ApiUtils";
import { AsteroidsContext } from "../App";
import { Navigate } from "react-router";

export const LoginPage = () => {
    const { state, dispatch } = useContext(AsteroidsContext);

    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [apiKey, setApiKey] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [doSaveLoginState, setDoSaveLoginState] = useState(false);
    const [apiKeyTextboxStyle, setApiKeyTextboxStyle] = useState({
        width: "100%",
        height: "25px",
        borderRadius: "3px",
        borderWidth: "1px",
        borderColor: "grey",
        marginBottom: "10px",
    });

    const changeName = (event) => {
        setName(event.target.value);
    };

    const changeApiKey = (event) => {
        setApiKey(event.target.value);
    };

    const changeLoginSaveStateBool = (event) => {
        setDoSaveLoginState(event.target.checked);
    };

    const submit = (event) => {
        setIsLoading(true);

        ValidateApiKey(apiKey)
            .then((response) => {
                setIsLoading(false);
                // Response status 403 Forbidden means that the api key is not valid
                if (response.status === 403) {
                    setApiKeyTextboxStyle({
                        ...apiKeyTextboxStyle,
                        borderColor: "red",
                        borderWidth: "3px",
                    });
                } else {
                    setApiKeyTextboxStyle({
                        ...apiKeyTextboxStyle,
                        borderColor: "grey",
                        borderWidth: "1px",
                    });

                    if (doSaveLoginState) {
                        window.localStorage.setItem("username", name);
                        window.localStorage.setItem("customApiKey", apiKey);
                    }

                    dispatch({
                        payload: {
                            name: name,
                            apiKey: apiKey,
                        },
                        type: "SET_USER_PROFILE",
                    });
                    setIsLoggedIn(true);

                    fetch(GetAPIUrl(apiKey))
                        .then((response) =>
                            response.json().then((resData) => {
                                dispatch({
                                    payload: ConvertAPIDataToList(resData),
                                    type: "UPDATE_ASTEROIDS_LIST",
                                });
                            })
                        )
                        .catch((error) => console.log(error));
                }
            })
            .catch((error) => {
                setIsLoading(false);
                setApiKeyTextboxStyle({
                    ...apiKeyTextboxStyle,
                    borderColor: "red",
                    borderWidth: "3px",
                });
            });
    };

    return (
        <div className={styles.loginPage}>
            {isLoggedIn ? <Navigate to="/" /> : null}

            <LoginPageHeader />
            <div className={styles.line} />

            <div className={styles.inputsFit}>
                <div className={styles.textBoxTitles}>Имя пользователя</div>
                <input
                    type={"text"}
                    className={styles.textBoxes}
                    value={name}
                    onChange={changeName}
                ></input>

                <div className={styles.textBoxTitles}>Ключ апи</div>
                <input
                    type={"text"}
                    style={apiKeyTextboxStyle}
                    value={apiKey}
                    onChange={changeApiKey}
                ></input>

                <div>
                    <input
                        type={"checkbox"}
                        value={doSaveLoginState}
                        onChange={changeLoginSaveStateBool}
                    ></input>
                    Save authorization data and use it in the future
                </div>

                <button className={styles.loginButton} onClick={submit}>
                    Войти
                </button>

                <LoadCircle isActive={isLoading} />
            </div>
        </div>
    );
};
