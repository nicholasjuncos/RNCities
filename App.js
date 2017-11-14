import React from 'react'
import Tabs from './src/tabs'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'

import { persistStore } from 'redux-persist' //New

const store = createStore(rootReducer)
const persistor = persistStore(store) //New
import { PersistGate } from 'redux-persist/es/integration/react' //new

const App = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Tabs />
        </PersistGate>
    </Provider>
)

export default App
