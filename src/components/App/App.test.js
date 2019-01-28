import ReactDOM from "react-dom"
import React from 'react'
import { configure, mount } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

configure({ adapter: new Adapter() })

xdescribe('App component deep test', () => {
  let app
  let wrapper

  beforeEach( () =>{
    app = mount(<App />)
    wrapper = app.instance()
  });

  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(app, div)
  });

  it('should define state.items as array', () => {
    expect(Array.isArray(app.state().items)).toBeTruthy()
    // expect(app.state('items')).toEqual([]) // Alternative
  });

  it('should update state.currentItem state after handle imput', () => {
    let mockObj = { target: { value: 'Mock' } };
    //run handle input
    wrapper.handleInput(mockObj)
    expect(app.state().currentItem.text).toEqual(mockObj.target.value)
  });

  it('should save item to state.items and erase state.currentItem after adding new', () => {
    let mockObj = { target: { value: 'Mock' } };
    wrapper.handleInput(mockObj)
    let event = new Event('submit')
    //run add item after handle input
    wrapper.addItem(event)
    expect(app.state().items[0].text).toEqual(mockObj.target.value)
    expect(app.state().currentItem.text).toEqual('')
  });

  it('should delete item from state.items', () => {
    let mockObj = { target: { value: 'Mock' } };
    wrapper.handleInput(mockObj)
    let event = new Event('submit')
    wrapper.addItem(event)
    let key = app.state().items[0].key
    //run delete item after add item
    wrapper.deleteItem(key)
    expect(app.state().items.length).toBe(1)
  });

  it('should toggle item to be in edited or saved state', () => {
    let mockObj = { target: { value: 'Mock' } };
    wrapper.handleInput(mockObj)
    let event = new Event('submit')
    wrapper.addItem(event)
    let key = app.state().items[0].key
    //first toggleItem run should switch item to editable state - state.item[0].readonly=false
    wrapper.toggleItem(key)
    expect(app.state().items[0].readonly).toBeFalsy()
    //second toggleItem run should switch item to saved state - state.item[0].readonly=true
    wrapper.toggleItem(key)
    expect(app.state().items[0].readonly).toBeTruthy()
  });

});