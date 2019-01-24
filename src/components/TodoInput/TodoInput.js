import React from "react"

// class TodoInput extends React.Component {

const TodoInput = ({ currentItem, addItem, handleInput }) => {

    // render() {
        // const addItem = this.props.addItem

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
    // }
}

export default TodoInput;