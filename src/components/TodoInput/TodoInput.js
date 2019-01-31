import React from "react"

/**
 * Creates child TodoInput component
 *
 * @param  {object} currentItem - property of Redux store
 * @callback  {function} handleInput - saves input field changes to store.currentItem
 * @callback  {function} addItem - creates store.items array element from store.currentItem
 * @event {onChange} - calls handleInput
 * @event {onSubmit} - calls addItem
 * @returns React component
 */
const TodoInput = ({ currentItem, handleInput, addItem }) => {

    return (
        <div className='todoHeaderMain'>
            <div className='header'>
                <form onSubmit={ e =>  {
                    e.preventDefault()
                    addItem()}}>
                    <input
                        placeholder='Type something'
                        onChange={handleInput}
                        value={currentItem.text}
                    />
                    <button className='btn btn-primary'>Add item</button>
                </form>
            </div>
        </div>
    )
}

export default TodoInput;