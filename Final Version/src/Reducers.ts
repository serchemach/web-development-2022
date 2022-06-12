import { GetDefaultApiKey } from "./ApiUtils";
import { Asteroid } from "./AsteroidCard/AsteroidCard";
import {
    ASTEROID_DISTANCE_MODE_KM,
    ASTEROID_SHOW_MODE_ALL,
} from "./AsteroidConstants/AsteroidConstants";
import { UserProfile } from "./LoginPage/LoginPage";

export type GlobalState = {
    asteroidsList: Asteroid[];
    destructionList: Asteroid[];
    userProfile: UserProfile;
};

export const emptyGlobalState: GlobalState = {
    asteroidsList: [],
    destructionList: [],
    userProfile: {
        name: "",
        apiKey: GetDefaultApiKey(),
    },
};

export type AsteroidReducerAction = {
    type: string;
    payload: GlobalState;
};

export const AsteroidsReducer = (
    state: GlobalState,
    action: AsteroidReducerAction
): GlobalState => {
    switch (action.type) {
        case "UPDATE_ASTEROIDS_LIST":
            return {
                ...state,
                asteroidsList: action.payload.asteroidsList,
            };
        case "ADD_TO_DESTRUCTION_LIST":
            let resultList = state.destructionList;
            
            if(resultList.find((item: Asteroid) => item.id === action.payload.destructionList[0].id) === undefined){
                resultList.push(action.payload.destructionList[0]);
            }

            return {
                ...state,
                destructionList: resultList,
            };

        case "SET_USER_PROFILE":
            return {
                ...state,
                userProfile: action.payload.userProfile,
            };
        
        case "EMPTY_DESTRUCTION_LIST":
            return {
                ...state,
                destructionList: [],
            }

        default:
            throw new Error();
    }
};

export type ViewState = {
    distanceMode: number;
    showMode: number;
};

export const emptyViewState: ViewState = {
    distanceMode: ASTEROID_DISTANCE_MODE_KM,
    showMode: ASTEROID_SHOW_MODE_ALL,
};

export type ViewReducerAction = {
    type: string;
    payload: ViewState;
};

export const ViewReducer = (
    state: ViewState,
    action: ViewReducerAction
): ViewState => {
    switch (action.type) {
        case "CHANGE_DISTANCE_MODE":
            return {
                ...state,
                distanceMode: action.payload.distanceMode,
            };
        case "CHANGE_SHOW_MODE":
            return {
                ...state,
                showMode: action.payload.showMode,
            };

        default:
            throw new Error();
    }
};
