import constants from '../../../constants'
import { takeEvery, put } from 'redux-saga/effects'
import workers from '../workers'

let watchers = {}

watchers.loadingOn = function* () {
    yield takeEvery(constants.LOADING_START, workers.fetchApi)
}


watchers.loadingOff = function* () {
    yield put({ type: constants.LOADING_END, payload: false })
}


export default watchers