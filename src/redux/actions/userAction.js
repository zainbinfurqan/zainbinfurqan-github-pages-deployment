import constants from '../../constants'


let actions = {}


actions.setUsers = value => ({
    type: constants.SET_USER_DATA,
    payload: value
})
export default actions;