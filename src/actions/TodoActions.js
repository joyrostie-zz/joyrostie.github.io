import * as types from '../constants/ActionTypes'

/**
 * @param  {String} text - text from input event e.target.value
 * @returns object with instruction and argument to Redux reducer
 */
export const handleItemAction = (text) => {
    return {
        type: types.HANDLE_ITEM,
        text
    }
}

/**
 * @returns object with instruction to Redux reducer
 */
export const addItemAction = () => {
    return {
        type: types.ADD_ITEM
    }

}

/**
 * @param  {Number} key - item key on what deleteItemAction was called
 * @returns object with instruction and argument to Redux reducer
 */
export const deleteItemAction = (key) => {
    return {
        type: types.REM_ITEM,
        key
    }

}

/**
 * @param  {Number} key - item key on what toggleItemAction was called
 * @returns object with instruction and argument to Redux reducer
 */
export const toggleItemAction = (key) => {
    return {
        type: types.TOG_ITEM,
        key
    }

}