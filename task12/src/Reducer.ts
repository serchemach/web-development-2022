import { Asteroid } from "./AsteroidCard/AsteroidCard";
import { UserProfile } from "./LoginPage/LoginPage";

export type GlobalState = {
    asteroidsList: Asteroid[];
    distanceMode: number;
    showMode: number;
    destructionList: Asteroid[];
    userProfile: UserProfile;
};

export type ReducerAction = {
    type: string;
    payload: GlobalState;
};

export const reducer = (state: GlobalState, action: ReducerAction): GlobalState => {
    switch (action.type) {
        case "UPDATE_ASTEROIDS_LIST":
            return {
                ...state,
                asteroidsList: action.payload.asteroidsList,
            };
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
        case "ADD_TO_DESTRUCTION_LIST":
            return {
                ...state,
                destructionList: [...state.destructionList, action.payload.destructionList[0]],
            };

        case "SET_USER_PROFILE":
            return {
                ...state,
                userProfile: action.payload.userProfile,
            };

        default:
            throw new Error();
    }
};
