import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput/TodoInput'
import { handleItemAction, addItemAction } from '../actions/TodoActions'


/**
 * Maps Redux store to component
 *
 * @param  {object} state - Redux store
 * @returns state propperty currentItem
 */
const mapStateToProps = (state) => {
    return {
        currentItem: state.currentItem
    }
}

/**
 * Maps Redux store methods to component
 *
 * @param  {function} dispatch - Redux reducers fucntions
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

const TodoHeader = connect(mapStateToProps, mapDispatchToProps)(TodoInput)

export default TodoHeader;