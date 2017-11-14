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
                        locations: [],
                        id: id
                    }
                }
            }
        case ADD_LOCATION:
            return {
                cities: {
                    ...state.cities,
                    [action.city.id]: {
                        ...state.cities[action.city.id],
                        locations: [
                            ...state.cities[action.city.id].locations,
                            action.location
                        ]
                    }
                }
            }
        default:
            return state
    }
}
