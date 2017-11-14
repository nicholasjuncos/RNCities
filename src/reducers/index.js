import citiesReducer from './citiesReducers'

import { persistCombineReducers} from 'redux-persist' // New
import { AsyncStorage } from 'react-native' // New

const config = {
    key: 'root',
    storage: AsyncStorage
}

export default persistCombineReducers(config,{
    citiesReducer
})