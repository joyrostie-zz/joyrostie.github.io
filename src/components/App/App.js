import React from 'react'
import TodoHeader from '../../containers/TodoHeader'
import TodoItems from '../../containers/TodoItems'
import 'bootstrap/dist/css/bootstrap.css'
import '../../styles/index.css'

class App extends React.Component {

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
                    />
                </div>
                <div className='innerFlexBox'>
                    <TodoItems
                    />
                </div>
            </div>
        )
    }
}

export default App;