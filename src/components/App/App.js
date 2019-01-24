import React from 'react'
import TodoHeader from '../../containers/TodoHeader'
import TodoItems from '../../containers/TodoItems'
import 'bootstrap/dist/css/bootstrap.css'
import '../../styles/index.css'

class App extends React.Component {
    state = {
        currentItem: {text:'', key: 0, readonly: true},
        items: []
    }

    componentDidMount() {
        if (window.localStorage.length) {
            let items = JSON.parse(window.localStorage.getItem('items'))
            this.setState({
                items: items
            })
        }
    }

    render() {
        return (
            <div className='flexBox'>
                <div className='jumbotron innerFlexBox'>
                    <TodoHeader
                        // handleInput={this.handleInput}
                        // addItem={this.addItem}
                        // currentItem={this.state.currentItem}
                    />
                </div>
                <div className='innerFlexBox'>
                    <TodoItems
                        items={this.state.items}
                        toggleItem={this.toggleItem}
                        deleteItem={this.deleteItem}
                    />
                </div>
            </div>
        )
    }

    deleteItem = key => {
        const filteredItems = this.state.items.filter( item => item.key !== key )
        const filteredLocalItems = JSON.parse(window.localStorage.getItem('items'))
        for (let i = 0; i < filteredLocalItems.length; i++) {
            if (filteredLocalItems[i].key === key) {
                filteredLocalItems.splice(i, 1)
            }
        }
        window.localStorage.setItem('items', JSON.stringify(filteredLocalItems))
        this.setState({
            items: filteredItems
        })
    }

    toggleItem = key => {
        const editedItem = this.state.items.find( item => item.key === key )
        if (editedItem.readonly) {
            this.editItem(key)
        } else {
            this.saveItem(key)
        }
    }

    editItem = key => {
        const editedItem = this.state.items.find( item => item.key === key )
        editedItem.readonly = false
        this.setState({
            items: this.state.items
        })
    }

    saveItem = key => {
        const editedItem = this.state.items.find( item => item.key === key )
        editedItem.readonly = true
        this.setState({
            items: this.state.items
        })
    }
}

export default App;