/*global shallow, mount, sinon */
import Component from './App'


describe('<App />', () => {
	it('Match Snapshot', () => {
		const wrapper = shallow(<Component />)
		expect(wrapper).toMatchSnapshot()
	})
})