export const ADD_CITY = 'ADD_CITY'
export const ADD_LOCATION = 'ADD_LOCATION'

export function addCity(city) {
    return {
        type: ADD_CITY,
        city: city
    }
}

export function addLocation(city, location) {
    return {
        type: ADD_LOCATION,
        city: city,
        location: location
    }
}