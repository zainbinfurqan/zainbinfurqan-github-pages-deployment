import { call, put } from 'redux-saga/effects'
import watcher from '../watchers'
import usersActions from '../../actions/userAction'
import { fetchUsers } from '../../../apis'


let workers = {

}

workers.fetchApi = function* () {
    try {
        let response = yield call(fetchUsers);
        yield put(usersActions.setUsers(response))
        yield put(watcher.loadingOff())
    } catch (error) {

    }
}

export default workers 