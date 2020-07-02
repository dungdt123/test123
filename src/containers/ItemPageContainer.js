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
        isLoading: state.items.isFetching,
        textSearch : state.items.textSearch
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        initLoad: () => {
            dispatch(actions.getListItem())
            
        },
        addDispatch: (data) => {
            dispatch(actions.addItem(data))
            
        },
        updateDispatch:(data) =>{
            dispatch(actions.updateItem(data))
        },  
        deleteDispatch:(data) =>{
            dispatch(actions.deleteItem(data))
        },
        searchDispatch:(data) =>{
            dispatch(actions.searchItem(data))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)