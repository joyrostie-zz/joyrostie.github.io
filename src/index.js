import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/todoListReducer'
import App from './components/App/App'

const initialState = {
    currentItem: { text: '', key: 0, readonly: true },
    items: []
}

const store = createStore(rootReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));