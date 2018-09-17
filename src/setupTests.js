import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import sinon from 'sinon'
// change serializer to json
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))
Enzyme.configure({ adapter: new Adapter() })

// Cleaner test pages...
global.sinon = sinon
global.React = React
global.shallow = shallow
global.mount = mount
global.render = render
global.mockStore = configureStore([thunk])
global.store = global.mockStore()
//
global.testString = 'This is a test String...'
