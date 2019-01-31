import React from 'react'
import TodoHeader from './TodoHeader'
import TodoItems from './TodoItems'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/index.css'

/**
 * Renders App containder
 *
 * @returns TodoHeader and TodoItems cointainers
 */
class App extends React.Component {

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