import { Asteroid } from "./AsteroidCard/AsteroidCard";

const ParseDate = (date: Date): string => {
    let currentDay: string = date.getDate().toString();
    if (date.getDate() < 10) currentDay = "0" + currentDay;

    let currentMonth: string = (date.getMonth() + 1).toString();
    if (date.getMonth() + 1 < 10) currentMonth = "0" + currentMonth;

    return date.getFullYear().toString() + "-" + currentMonth + "-" + currentDay;
};

export const GetDefaultApiKey = (): string => {
    const key: string = process.env.REACT_APP_NASA_API_KEY ? process.env.REACT_APP_NASA_API_KEY : "DEMO_KEY";

    return key;
};

export const GetAPIUrl = (key: string): string => {
    let day = new Date();
    const startDate = ParseDate(day);

    day.setDate(day.getDate() + 7); // Because API only allows us to have a max range of 7 days
    const endDate = ParseDate(day);

    return (
        "https://api.nasa.gov/neo/rest/v1/feed?start_date=" +
        startDate +
        "&end_date=" +
        endDate +
        "&api_key=" +
        key
    );
};

// Yeah, so how would it be better to define types for APIs?
// I've decided to not worry about it for now and just use any

const ToAsteroidObj = (data: any): Asteroid => {
    return {
        name: data.name,
        date: data.close_approach_data[0].close_approach_date,
        grade: data.is_potentially_hazardous_asteroid ? "опасен" : "не опасен",
        size:
            (data.estimated_diameter.meters.estimated_diameter_min +
                data.estimated_diameter.meters.estimated_diameter_max) /
            2.0,
        distance: data.close_approach_data[0].miss_distance.kilometers,
    };
};

export const ConvertAPIDataToList = (data: any): Asteroid[] => {
    let outList = [];

    for (let asteroidListName in data.near_earth_objects) {
        for (let asteroidName in data.near_earth_objects[asteroidListName]) {
            outList.push(
                ToAsteroidObj(
                    data.near_earth_objects[asteroidListName][asteroidName]
                )
            );
        }
    }

    return outList;
};

export const ValidateApiKey = (key: string): Promise<any> => {
    return fetch(GetAPIUrl(key));
};
