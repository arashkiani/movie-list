import { actionSortMovies } from '../filters'
import genresMocks from '../../mocks/genres'
import moviesMocks from '../../mocks/movies'
export const actionGetMovies = () => {
	return async dispatch => {
		const { page, total_pages, results } = await new Promise(resolve => {
			resolve(moviesMocks)
		})
		dispatch({
			type: 'getMovies',
			result: {
				list: results,
				pagination: { page, total_pages },
			},
		})
		dispatch(actionSortMovies())
	}
}
export const actionGetGenres = page => {
	return async dispatch =>
		dispatch({
			type: 'getGenres',
			result: await new Promise(resolve => {
				resolve(genresMocks)
			}),
		})
}

export const reducers = {
	getMovies:(state, {list, pagination}) => ({
		...state,
		list: list,
		pagination: pagination
	}),
	sortedList:(state, result) => {
		return ({
			...state,
			sortedMovies: result,
		})
	},
	getGenres:(state, result) => ({
		...state,
		genres: result.genres
	})
}
