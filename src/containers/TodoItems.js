import { connect } from 'react-redux'
import TodoItem from '../components/TodoItem/TodoItem'
import { toggleItemAction, deleteItemAction } from '../actions/TodoActions'

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleItem: (key) => {
            dispatch(toggleItemAction(key))
        },
        deleteItem: (key) => {
            dispatch(deleteItemAction(key))
        }
    }
}

const TodoItems = connect(mapStateToProps, mapDispatchToProps)(TodoItem)

export default TodoItems;