import React, { } from 'react';
import { connect } from 'react-redux'
import loadingActions from '../redux/actions/lodingActions';
// import constants from '../constants'
function ToDoApp(props) {



    function handleStarLoading() {
        props.loadingAction(true)
    }


    return (
        <div>
            {console.log(props.loading)}
            <button onClick={handleStarLoading}>Start Loading</button>

        </div>
    )
}

const mapStateToProps = (store) => ({
    loading: store.loadingReducer.isloading
})

const mapDispatchToProps = dispatch => ({
    // loadingAction: loadingActions.loadingAction
    loadingAction: (value) => dispatch(loadingActions.loadingAction(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);