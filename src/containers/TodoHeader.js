import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput/TodoInput'
import { handleItemAction, addItemAction } from '../actions/TodoActions'

const mapStateToProps = (state) => {
    return {
        currentItem: state.currentItem
    }
}

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