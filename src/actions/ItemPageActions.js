import * as types from '../constant'
export function getListItem(payload){
    return{
        type : types.GET_ITEM_REQUEST,
        payload
    }
}
export function addItem(payload){
    return{
        type :types.ADD_ITEM_REQUEST,
        payload
    }
}
export function updateItem(payload) {
    return{
        type : types.PUT_ITEM_REQUEST,
        payload
    }
}
export function deleteItem(payload){
    return{
        type : types.DELETE_ITEM_REQUEST,
        payload
    }
}
export function searchItem(payload){
    return{
        type : types.SEARCH_ITEM_REQUEST,
        payload
    }
}