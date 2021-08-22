import * as ACTIONS from './actionsTypes';

export function AddUserReview(data) {
    return {
        type: ACTIONS.ADD_USER_REVIEW,
        payload: data,
    };
}
