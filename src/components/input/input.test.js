/*global shallow, mount, sinon */
import Component from '.'


describe('<Input />', () => {
	it('Match Snapshot', () => {
		const wrapper = shallow(<Component type="range" />)
		expect(wrapper).toMatchSnapshot()
	})
	it('Props pass', () => {
		const wrapper = mount(<Component type="checkbox" value={testString}/>)
    	expect(wrapper.find('input').props().value).toBe(testString)
   		wrapper.unmount();
	})
})