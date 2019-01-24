import { connect } from 'react-redux'
import TodoItem from '../components/TodoItem/TodoItem'
import { deleteItemAction, toggleItemAction, saveItemAction, editItemAction } from '../actions/TodoActions'

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (key) => {
            dispatch(deleteItemAction(key))
        },
        toggleItem: (key) => {
            dispatch(toggleItemAction(key))
        }
    }
}

const TodoItems = connect(mapStateToProps, mapDispatchToProps)(TodoItem)

export default TodoItems;