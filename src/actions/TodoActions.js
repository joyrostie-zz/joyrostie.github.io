import * as types from "../constants/ActionTypes";

export const handleItemAction = (text) => {
    return {
        type: types.HANDLE_ITEM,
        text
    }
}

export const addItemAction = () => {
    return {
        type: types.ADD_ITEM
    }

}

export const deleteItemAction = (key) => {
    return {
        type: types.REM_ITEM,
        key
    }

}