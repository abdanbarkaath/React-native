import * as ACTIONS from '../actions/actionsTypes'


const initialState = {
    reviews: [
        { title: 'first review', rating: '1', body: 'some review text', id: 1 },
        { title: 'second review', rating: '3', body: 'some review text', id: 2 },
        { title: 'third review', rating: '5', body: 'some review text', id: 3 },
    ]
}

const addReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_USER_REVIEW: {
            action.payload.id = state.reviews.length + 1;
            console.log([...state.reviews, action.payload], 'payload');
            return { ...state, reviews: [...state.reviews, action.payload] }
        };
        default:
            return state;
    }
}

export default addReviewReducer;