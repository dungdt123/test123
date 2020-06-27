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