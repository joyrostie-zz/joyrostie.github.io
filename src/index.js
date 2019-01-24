import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/todoListReducer'

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