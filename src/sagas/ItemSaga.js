import { put, takeEvery } from 'redux-saga/effects'
import getItems from '../fetchAPI/getItems'
import addItemAPI from '../fetchAPI/addItem'
import updateIemAPI from '../fetchAPI/updateItem'
import deleteItemAPI from '../fetchAPI/deleteItem'
import searchItemAPI from '../fetchAPI/searchItem'
import * as types from '../constant'
function* getListItem(action) {
    try {
        const res = yield getItems();
        yield put({
            type: types.GET_ITEM_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* addItem(action) {
    try {
        yield addItemAPI(action.payload);

        yield put({
            type: types.ADD_ITEM_SUCCESS
        })

        yield put({
            type: types.GET_ITEM_REQUEST
        })
    } catch (error) {
        yield put({
            type: types.ADD_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* updateItem(action) {
    try {
        yield updateIemAPI(action.payload.data);

        yield put({
            type: types.PUT_ITEM_SUCCESS
        })
        if (action.payload.textSearch === "") {
            yield put({
                type: types.GET_ITEM_REQUEST
            })
        } else {
            yield put({
                type: types.SEARCH_ITEM_REQUEST,
                payload : action.payload.textSearch
                
            })
        }

        
    } catch (error) {
        yield put({
            type: types.PUT_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* deleteItem(action) {
    try {
        yield deleteItemAPI(action.payload.data);
        yield put({
            type: types.DELETE_ITEM_SUCCESS
        })
        if (action.payload.textSearch === "") {
            yield put({
                type: types.GET_ITEM_REQUEST
            })
        } else {
            yield put({
                type: types.SEARCH_ITEM_REQUEST,
                payload : action.payload.textSearch
            })
        }
    } catch (error) {
        yield put({
            type: types.DELETE_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* searchItem(action){
    try {
       
        const res =  yield searchItemAPI(action.payload);
        yield put({
            type :types.SEARCH_ITEM_SUCCESS,
            payload : {
                res,
                textSearch : action.payload
            }
        })
    } catch (error) {
        yield put({
            type : types.SEARCH_ITEM_FAILURE,
            payload:{
                errorMessage : error.message
            }
        })
    }
}
export const ItemSaga = [
    takeEvery(types.GET_ITEM_REQUEST, getListItem),
    takeEvery(types.ADD_ITEM_REQUEST, addItem),
    takeEvery(types.PUT_ITEM_REQUEST, updateItem),
    takeEvery(types.DELETE_ITEM_REQUEST, deleteItem),
    takeEvery(types.SEARCH_ITEM_REQUEST,searchItem)
];