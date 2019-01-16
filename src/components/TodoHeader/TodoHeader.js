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
}

export default TodoHeader;