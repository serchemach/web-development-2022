import { emptyAsteroid } from "./AsteroidCard/AsteroidCard";
import { ASTEROID_DISTANCE_MODE_KM, ASTEROID_DISTANCE_MODE_LUNAR, ASTEROID_SHOW_MODE_ALL, ASTEROID_SHOW_MODE_DANGEROUS } from "./AsteroidConstants/AsteroidConstants";
import { AsteroidsReducer, emptyGlobalState, emptyViewState, ViewReducer } from "./Reducers";

describe("AsteroidsReducer", () => {
    it('should change asteroidList field if action.type === "UPDATE_ASTEROIDS_LIST"', () => { // begins with should
        const result = AsteroidsReducer(emptyGlobalState, {type: "UPDATE_ASTEROIDS_LIST", payload: {...emptyGlobalState,
        asteroidsList: [emptyAsteroid]}});
        expect(result).toBeDefined();
        expect(result.asteroidsList).toEqual([emptyAsteroid]);
        expect(result).not.toEqual([]);
        });
    
    it('should change userProfile field if action.type === "SET_USER_PROFILE"', () => {
        const result = AsteroidsReducer(emptyGlobalState, {type: "SET_USER_PROFILE", payload: {...emptyGlobalState,
            userProfile: {
                name: "abcd",
                apiKey: "cdef",
            }}});
            expect(result).toBeDefined();
            expect(result.userProfile).toEqual({
                name: "abcd",
                apiKey: "cdef",
            });
            expect(result).not.toEqual({});
        })

    it('should change destructionList field if action.type === "ADD_TO_DESTRUCTION_LIST"', () => {
        const result = AsteroidsReducer(emptyGlobalState, {type: "ADD_TO_DESTRUCTION_LIST", payload: {...emptyGlobalState,
            destructionList: [emptyAsteroid]}});
            expect(result).toBeDefined();
            expect(result.destructionList).toEqual([emptyAsteroid]);
            expect(result).not.toEqual([]);
        })

    it('should throw error if action.type is invalid', () => { // begins with should
        expect(() => AsteroidsReducer(emptyGlobalState, {type: "", payload: emptyGlobalState})).toThrow();
        });
});

describe("ViewReducer", () => {
    it('should change distanceMode field if action.type === "CHANGE_DISTANCE_MODE"', () => {
        const result = ViewReducer(emptyViewState, {type: "CHANGE_DISTANCE_MODE", payload: {...emptyViewState,
            distanceMode: ASTEROID_DISTANCE_MODE_LUNAR}});
            expect(result).toBeDefined();
            expect(result.distanceMode).toEqual(ASTEROID_DISTANCE_MODE_LUNAR);
            expect(result).not.toEqual(ASTEROID_DISTANCE_MODE_KM);
        })
    
    it('should change showMode field if action.type === "CHANGE_SHOW_MODE"', () => {
        const result = ViewReducer(emptyViewState, {type: "CHANGE_SHOW_MODE", payload: {...emptyViewState,
            showMode: ASTEROID_SHOW_MODE_DANGEROUS}});
            expect(result).toBeDefined();
            expect(result.showMode).toEqual(ASTEROID_SHOW_MODE_DANGEROUS);
            expect(result).not.toEqual(ASTEROID_SHOW_MODE_ALL);
        })

    it('should throw error if action.type is invalid', () => { // begins with should
        expect(() => ViewReducer(emptyViewState, {type: "", payload: emptyViewState})).toThrow();
        });
});
