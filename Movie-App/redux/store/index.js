import addReviewReducer from '../reducers/reviews'
import { createStore, combineReducers, compose } from 'redux'

const rootReducer = combineReducers({
    reviews: addReviewReducer,
})
const store = createStore(rootReducer)
export default store;