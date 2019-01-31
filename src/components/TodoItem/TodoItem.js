import React from "react"
/**
 * Creates child TodoItem component
 *
 * @param  {object} items - property of Redux store
 * @callback  {function} toggleItem - sends action to reducer to switch item.readly property
 * @callback  {function} deleteItem -sends action to reducer to remove item from state items
 * @event {onClick} - calls toggleItem
 * @event {onClick} - calls deleteItem
 * @returns React component
 */
const TodoItem = ({ items, toggleItem, deleteItem}) => {

    const createTodos = item => {
        let btnText = item.readonly ? 'edit' : 'save'

        return (
            <li key={item.key}>
                <input
                    type='text'
                    readOnly={item.readonly}
                    defaultValue={item.text}
                    className='form-control-plaintext'
                />
                <div className='btn-group btn-group-sm float-right'>
                    <button className='btn btn-primary' onClick={() =>
                        toggleItem(item.key)}> {btnText} </button>
                    <button className='btn btn-primary' onClick={() =>
                        deleteItem(item.key)}> remove </button>
                </div>
            </li>
        )
    }

    const todoItems = items
    const listItems = todoItems.map(createTodos)

    return (
        <div>
            <ul className='theList'> {listItems} </ul>
        </div>
    )
}

export default TodoItem;