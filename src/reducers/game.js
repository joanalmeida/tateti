import * as gameActions from '../actions/GameActions';

export default function gameReducer(state = {}, action = {}) {
    switch(action.type) {
        case gameActions.INIT_GAME:
            return {
                ...state,
                message: action.msg
            }
        default:
            return state;
    }
}