const defaultState = {
    geo: JSON.parse(localStorage.getItem('weatherPos')) ? JSON.parse(localStorage.getItem('weatherPos')) : null
}

const CHANGE_POSITION = 'CHANGE_POSITION';

export const positionReducer = (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_POSITION: {
            localStorage.setItem('weatherPos', JSON.stringify(action.payload));
            return {...state, geo: action.payload}
        }
        default:
            return state
    }
}

export const changePositionAction = (payload) => ({type: CHANGE_POSITION, payload});