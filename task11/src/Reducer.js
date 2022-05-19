export const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_ASTEROIDS_LIST":
            return {
                ...state,
                asteroidsList: action.payload,
            };
        case "CHANGE_DISTANCE_MODE":
            return {
                ...state,
                distanceMode: action.payload,
            };
        case "CHANGE_SHOW_MODE":
            return {
                ...state,
                showMode: action.payload,
            };
        case "ADD_TO_DESTRUCTION_LIST":
            return {
                ...state,
                destructionList: [...state.destructionList, action.payload],
            };

        case "SET_USER_PROFILE":
            return {
                ...state,
                userProfile: {
                    name: action.payload.name,
                    apiKey: action.payload.apiKey,
                },
            };

        default:
            throw new Error();
    }
};
