/*global sinon, store, mockStore */
import defaultMoviesState from './movies.default'
import defaultFiltersState from './filters.default'
import genresMocks from '../mocks/genres'
import moviesMocks from '../mocks/movies'
import { actionGetMovies, actionGetGenres, reducers } from './movies'

const defaultState = {
	FILTERS: defaultFiltersState,
	MOVIES: defaultMoviesState,
}
let store
jest.mock('./movies')

beforeEach(() => {
	store = mockStore(defaultState)
})
describe('redux Actions', () => {
	it('actionGetGenres', async () => {
		await store.dispatch(actionGetGenres())
		const actions = store.getActions()
		expect(actions[0].type).toEqual('getGenres')
		expect(actions[0].result).toEqual(genresMocks)
	})
	it('actionGetMovies', async () => {
		await store.dispatch(actionGetMovies(1))
		const actions = store.getActions()
		expect(actions[0].type).toEqual('getMovies')
		expect(actions[0].result.list).toEqual(moviesMocks.results)
	})
})
describe('redux reducers', () => {
	it('reducers.getMovies', () => {
		const expectedResult = {
			list: moviesMocks.results,
			pagination: { page: 1, total_pages: 2 },
		}
		expect(reducers.getMovies({}, expectedResult)).toEqual(expectedResult)
	})
	it('reducers.sortedList', () => {
		const expectedResult = {
			sortedMovies: moviesMocks.results,
		}
		expect(reducers.sortedList({}, moviesMocks.results)).toEqual(expectedResult)
	})
	it('reducers.getGenres', () => {
		const expectedResult = {
			genres: genresMocks.genres,
		}
		expect(reducers.getGenres({}, genresMocks)).toEqual(expectedResult)
	})
})
