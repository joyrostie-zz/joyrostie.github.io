import * as types from "../constants/ActionTypes";

export function handleItemAction(item) {
    return {
        type: types.HANDLE_ITEM,
        item
    }
}

export function addItemAction(item) {
    return {
        type: types.ADD_ITEM,
        item
    }

}

export function deleteItemAction(key) {
    return {
        type: types.REM_ITEM,
        key
    }

}