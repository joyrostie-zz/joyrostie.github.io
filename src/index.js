import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/todoListReducer'
import App from './containers/App'

const initialState = {
    currentItem: { text: '', key: 0, readonly: true },
    items: []
}

/**
 * @param  {function} rootReducer - Redux reducer function
 * @param  {oject} initialState - the initial state of Redux store
 */
const store = createStore(rootReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));