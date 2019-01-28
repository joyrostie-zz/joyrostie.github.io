import ReactDOM from 'react-dom'
import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TodoItems from '../../containers/TodoItems'

configure({ adapter: new Adapter() });

xdescribe('TodoItems component test', () => {
    let todoItems
    beforeEach(() => {
        let entriesMock = [{ text: 'Mock', key: Date.now(), readonly: true }]
        todoItems = shallow(<TodoItems items={entriesMock} />)
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(todoItems, div);
    });

});