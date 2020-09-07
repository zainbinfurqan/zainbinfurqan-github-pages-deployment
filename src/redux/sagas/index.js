import { takeEvery, all, call, put } from 'redux-saga/effects'
import constants from '../../constants'
import { fetchUsers } from '../../apis'
import usersActions from '../actions/userAction'

function* loading() {
    yield takeEvery(constants.LOADING_START, fetchApi)
}


function* fetchApi() {
    try {
        let response = yield call(fetchUsers);
        yield put(usersActions.setUsers(response))
        yield put({ type: constants.LOADING_END, payload: false })
    } catch (error) {

    }
}

export default function* rootSaga() {
    yield all([
        loading()
    ])
}