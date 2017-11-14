import uuidv4 from 'uuid/v4'
import { ADD_CITY, ADD_LOCATION } from '../actions/citiesActions'

const initialState = {
    cities: {}
}

export default function citiesReducers(state = initialState, action) {
    switch(action.type) {
        case ADD_CITY:
            const id = uuidv4()
            return {
                cities: {
                    ...state.cities,
                    [id]: {
                        ...action.city,
                        locations: []
                    }
                }
            }
        case ADD_LOCATION:
            return {
                cities: {
                    ...state.cities,
                    [city.id]: {
                        ...state.cities[action.id],
                        locations: [
                            ...state.cities[action.id].locations,
                            location
                        ]
                    }
                }
            }
        default:
            return state
    }
}
