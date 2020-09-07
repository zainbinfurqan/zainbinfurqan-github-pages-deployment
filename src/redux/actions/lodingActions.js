import constants from '../../constants'


let actions = {}


actions.loadingAction = value => ({
    type: constants.LOADING_START,
    payload: value
})
export default actions;