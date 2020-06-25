import React, { Component } from 'react'
import Items from '../components/Items'
import { connect } from 'react-redux'
import * as actions from '../actions/ItemPageActions'

class ItemPageContainer extends Component {
    componentDidMount() {
        this.props.initLoad()
    }
    render() {
        return (
            <div>
                {this.props.isLoading == true
                ?
                <img src="https://i.pinimg.com/originals/90/80/60/9080607321ab98fa3e70dd24b2513a20.gif" />
                :
                <Items {...this.props} />}
            </div>  

        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items.listItem,
        isLoading: state.items.isFetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(actions.getListItem())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)