/*global shallow, mount, sinon */
import Component from '.'
const movie = {title:'title', overview:'overview', poster_path:'/poster_path', backdrop_path:'/backdrop_path', vote_average:1}
let shallowWrapper

beforeEach(async () => {
	shallowWrapper = shallow(<Component {...movie}/>)
})
describe('<Movie />', () => {
	it('Match Snapshot', () => {
		expect(shallowWrapper).toMatchSnapshot()
	})
	it('Props pass movie img url && title into component', () => {
		expect(shallowWrapper.find('img').props().src).toBe('https://image.tmdb.org/t/p/w185_and_h278_bestv2/poster_path')
		expect(shallowWrapper.find('h2').text()).toBe(movie.title)
	})
})