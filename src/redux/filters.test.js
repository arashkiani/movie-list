/*global shallow, mount, sinon, store, mockStore */
import defaultMoviesState from './movies.default'
import defaultFiltersState from './filters.default'
const defaultState = {
	FILTERS: defaultFiltersState,
	MOVIES: defaultMoviesState,
}
import {
	reducers,
	actionSortMovies,
	actionUpdateGenresFilter,
	actionUpdateRangeFilter,
} from './filters'
let store

beforeEach(() => {
	store = mockStore(defaultState)
})
describe('redux Actions', () => {
	it('actionUpdateGenresFilter', () => {
		store.dispatch(actionUpdateGenresFilter({ value: 1 }))
		const actions = store.getActions()
		const expectedResult = [
			{ type: 'updateGenresFilter', result: [1] },
			{ type: 'sortedList', result: [] },
		]
		expect(actions).toEqual(expectedResult)
	})
	it('actionUpdateRangeFilter', () => {
		store.dispatch(actionUpdateRangeFilter({ value: 1 }))
		const actions = store.getActions()
		const expectedResult = [
			{ type: 'updateRangeFilter', result: 1 },
			{ type: 'sortedList', result: [] },
		]
		expect(actions).toEqual(expectedResult)
	})
	it('actionSortMovies', () => {
		store.dispatch(actionSortMovies())
		const actions = store.getActions()
		const expectedResult = [{ type: 'sortedList', result: [] }]
		expect(actions).toEqual(expectedResult)
	})
})
describe('redux reducers', () => {
	it('reducers.updateGenresFilter', () => {
		const expectedResult = [1, 2, 3]
		expect(reducers.updateGenresFilter({}, expectedResult)).toEqual({
			filterByGenres: expectedResult,
		})
	})
	it('reducers.updateRangeFilter', () => {
		const expectedResult = 5
		expect(reducers.updateRangeFilter({}, expectedResult)).toEqual({
			filterByRange: expectedResult,
		})
	})
})
