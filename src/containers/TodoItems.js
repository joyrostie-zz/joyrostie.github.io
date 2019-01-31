import { connect } from 'react-redux'
import TodoItem from '../components/TodoItem/TodoItem'
import { toggleItemAction, deleteItemAction } from '../actions/TodoActions'

/**
 * Maps Redux store properties to component
 *
 * @param  {object} state - Redux store
 * @returns state property items array
 */
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

/**
 * Maps Redux store methods to component
 *
 * @param  {function} dispatch - Redux reducers functions
 * @returns toggleItem and addItem deleteItem
 */
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

/**
 * Generates TodoItems component and passes state props and methods to child component
 *
 * @param  {object} mapStateToProps
 * @param  {object} mapDispatchToProps
 * @param  {function} TodoItem functional component
 */
const TodoItems = connect(mapStateToProps, mapDispatchToProps)(TodoItem)

export default TodoItems;