import React from "react"

class TodoItems extends React.Component {

    render() {
        const todoItems = this.props.items
        const listItems = todoItems.map(this.createTodos)

        return (
            <div>
                <ul className='theList' style={{width: '100%'}}> {listItems} </ul>
            </div>
        )
    }

    createTodos = item => {
        const btnText = item.readonly ? 'edit' : 'save'

        return (
            <li key={item.key}>
                <input
                    type='text'
                    readOnly={item.readonly}
                    defaultValue={item.text}
                    className='form-control-plaintext'
                />
                <div className='btn-group btn-group-sm float-right'>
                    <button className='btn btn-primary' onClick={ () =>
                        this.props.toggleItem(item.key)}> {btnText} </button>
                    <button className='btn btn-primary' onClick={ () =>
                        this.props.deleteItem(item.key)}> remove </button>
                </div>
            </li>
        )
    }
}

export default TodoItems;