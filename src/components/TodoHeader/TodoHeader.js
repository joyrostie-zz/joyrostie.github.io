import React from "react"

class TodoHeader extends React.Component {

    render() {
        return (
            <div className='todoHeaderMain'>
                <div className='header'>
                    <form onSubmit={this.props.addItem}>
                        <input
                            placeholder='Type something'
                            onChange={this.props.handleInput}
                            value={this.props.currentItem.text}
                        />
                        <button className='btn btn-primary'>Add item</button>
                    </form>
                </div>
            </div>
        )
    }

    handleInput = e => {
        const itemText = e.target.value
        const currentItem = { text: itemText, key: Date.now(), readonly: true }
        this.setState({
            currentItem
        })
    }

    addItem = e => {
        e.preventDefault()
        const newItem = this.state.currentItem
        if (newItem.text !== '') {
            const items = [...this.state.items, newItem]
            window.localStorage.setItem('items', JSON.stringify(items))
            this.setState({
                items: items,
                currentItem: { text: '', key: 0, readonly: true }
            })
            console.log(this.state.items);
        }
    }
}

export default TodoHeader;