import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput/TodoInput'
import { handleItemAction, addItemAction } from '../actions/TodoActions'


/**
 * Maps Redux store properties to component
 *
 * @param  {object} state - Redux store
 * @returns state property currentItem object
 */
const mapStateToProps = (state) => {
    return {
        currentItem: state.currentItem
    }
}

/**
 * Maps Redux store methods to component
 *
 * @param  {function} dispatch - Redux reducers functions
 * @returns handleInput and addItem reducers
 */
const mapDispatchToProps = (dispatch) => {
    return {
        handleInput: (e) => {
            dispatch(handleItemAction(e.target.value))
        },
        addItem: () => {
            dispatch(addItemAction())
        }
    }
}

/**
 * Generates TodoHeader component and passes state props and methods to child component
 *
 * @param  {object} mapStateToProps
 * @param  {object} mapDispatchToProps
 * @param  {function} TodoInput functional component
 */
const TodoHeader = connect(mapStateToProps, mapDispatchToProps)(TodoInput)

export default TodoHeader;