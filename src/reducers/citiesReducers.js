import uuidv4 from 'uuid/v4'
import { ADD_CITY } from '../actions/citiesActions'

const initialState = {
    cities: {
        'London': {
            name: 'London',
            country: 'UK',
            id: uuidv4()
        },
        'Seattle': {
            name: 'Seattle',
            country: 'USA',
            id: uuidv4()
        }
    }
}

// { type: 'SOMETYPE' }

export default function citiesReducers(state = initialState, action) {
    switch(action.type) {
        case ADD_CITY:
            const id = uuidv4()
            return {
                cities: {
                    ...state.cities,
                    [id]: action.city
                }
            }
        default:
            return state
    }
}
