/*global shallow, mount, sinon, store, mockStore */
import {SelectRangeFilter} from './index'

const mapToProps = {
	filterByRange:  3,
	updateRangeFilter: jest.fn(({target}) => {
		mapToProps.filterByRange = parseInt(target.value, 10)
	})
}
let shallowWrapper;
beforeEach(() => {
	shallowWrapper = shallow(<SelectRangeFilter {...store} {...mapToProps}/>)
})
describe('<SelectRangeFilter />', () => {
	it('Match Snapshot', () => {
		expect(shallowWrapper).toMatchSnapshot()
	})
	it('change range from 3 to 5', () => {
		const selectedInput = shallowWrapper.find('form').first()
		selectedInput.simulate('change', { target: { value: 5 } })
		expect(mapToProps.filterByRange).toBe(5)
	})
})