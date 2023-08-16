// eslint-disable-next-line import/no-extraneous-dependencies
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducers'
const store = configureStore({
    reducer: rootReducer,
    // You can add middleware, devtools configuration, etc. here
})

export default store
