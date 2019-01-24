import * as types from '../constants/ActionTypes'

const initialState = {
    currentItem: { text: '', key: 0, readonly: true },
    items: []
}

export default function todolist(state = initialState, action) {
    switch (action.type) {
        case types.HANDLE_ITEM:
            return {
                ...state,
                currentItem: action.item
            }
        case types.ADD_ITEM:
            return {
                ...state,
                items: state.items.concat(state.currentItem),
                currentItem: initialState.currentItem
            }
        case types.REM_ITEM:
            return {
                ...state,
                items: state.items.filter( key => key !== action.key)
            }
        default:
            return {
                state
            };
    }
}