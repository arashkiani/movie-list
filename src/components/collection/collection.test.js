/*global shallow, mount, sinon */
import {Collection} from '.'
import genres from '../../mocks/genres'
import movies from '../../mocks/movies'

const mapToProps = {
	sortedMovies: movies.results,
	getMovies: jest.fn(() => ({})),
}

let mountWrapper;
beforeEach(() => {
	mountWrapper = mount(<Collection store={store} {...mapToProps}/>)
})
describe('<Collection />', () => {
	it('Match Snapshot', () => {
		expect(mountWrapper).toMatchSnapshot()
	})
	it('Number of movies should be ' + movies.results.length, ()=>{
		expect(mountWrapper.find('movie').length).toBe(movies.results.length)
	})
})