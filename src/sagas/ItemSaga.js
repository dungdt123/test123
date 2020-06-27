import {put,takeEvery} from 'redux-saga/effects'
import getItems from '../fetchAPI/getItems'
import addItemAPI from '../fetchAPI/addItem'
import * as types from '../constant'
function* getListItem(action){
    try {
        const res = yield getItems();
        yield put({
            type: types.GET_ITEM_SUCCESS,
            payload : res
        })
    } catch (error) {
        yield put ({
            type: types.GET_ITEM_FAILURE,
            payload: {
                errorMessage :error.message
            }
        })
    }
}
function* addItem(action){
    try {
        yield addItemAPI(action.payload);
        
        yield put({
            type: types.ADD_ITEM_SUCCESS
        })

        yield put({
            type: types.GET_ITEM_REQUEST
        })
    } catch (error) {
        yield put ({
            type: types.ADD_ITEM_FAILURE,
            payload: {
                errorMessage :error.message
            }
        })
    }
}
export const ItemSaga = [
    takeEvery(types.GET_ITEM_REQUEST, getListItem),
    takeEvery(types.ADD_ITEM_REQUEST, addItem )
];