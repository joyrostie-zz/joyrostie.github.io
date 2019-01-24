import * as types from '../constants/ActionTypes'
// import { combineReducers } from 'redux'

const todoListReducer = (state = {}, action) => {
    switch (action.type) {
        case types.HANDLE_ITEM:
            const itemText = action.text
            let newItem = { text: itemText, key: Date.now(), readonly: true }
            return {
                ...state,
                currentItem: newItem
            }
        case types.ADD_ITEM:
            return {
                ...state,
                items: [...state.items, state.currentItem],
                currentItem: { text: '', key: 0, readonly: true }
            }
        // case types.REM_ITEM:
        //     return {
        //         ...state,
        //         items: state.items.filter( key => key !== action.key)
        //     }
        default:
            return state
    }
}

// const initialItem = { text: '', key: 0, readonly: true }

// const currentItem = (state = initialItem, action) => {
//     switch (action.type) {
//         case types.HANDLE_ITEM:
//             const itemText = action.text
//             let newItem = { text: itemText, key: Date.now(), readonly: true }
//             return Object.assign({}, state, newItem)
//         default:
//             return state
//     }
// }

// const todoListReducer = combineReducers({
//     store,
//     currentItem
// })

// const rootReducer = ( state = {}, action) => {
//     // const itemsId = state.items.map(items => items.id)
//     return {
//         items: items(state.items, action, currentItem),
//         currentItem: currentItem(state.currentItem, action)
//     }
// }



export default todoListReducer