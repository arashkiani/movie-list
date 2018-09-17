/*global shallow, mount, sinon, store, mockStore */
import {SelectGenresFilter} from './index'
import genres from '../../mocks/genres'

const mapToProps = {
	genres: genres.genres,
	selectedOptions:  [],
	getGenres: jest.fn(() => ({})),
	updateGenresFilter: jest.fn(({target}) => {
		mapToProps.selectedOptions.push(target.value)
	}),
}
let mountWrapper;
beforeEach(() => {
	mountWrapper = mount(<SelectGenresFilter {...store} {...mapToProps}/>)
})
afterEach(() => {
	mountWrapper.unmount();
})
describe('<SelectGenresFilter />', () => {
	it('Match Snapshot', () => {
		expect(mountWrapper).toMatchSnapshot()
	})
	it('User can toggle button to get a list of Genres', () => {
		const container = mountWrapper.find('button').first()
		expect(container.length).toBe(1)
		container.simulate('click')
		expect(mountWrapper.find('label').length).toBe(genres.genres.length)
	})
	it('Select Genre option from the list', () => {
		mountWrapper.find('button').first().simulate('click')
		const value = mountWrapper.find('input').first().props().defaultValue
		const SelectGenre = mountWrapper.find('form').first()
		SelectGenre.simulate('change', { target: { value } })
		expect(mountWrapper.props().selectedOptions[0]).toBe(value)
	})
})