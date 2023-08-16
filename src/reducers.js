// eslint-disable-next-line import/no-extraneous-dependencies
import {combineReducers} from 'redux'

const initialState = {
    userData: {},
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER_DATA':
            return {
                ...state,
                userData: action.payload,
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user: userReducer,
})

export default rootReducer
