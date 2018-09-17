import defaultState from './movies.default'
import zFetch from '../services/zFetch'
import {actionSortMovies} from './filters'
export const actionGetMovies = (page)=>{
	const movieFetch = new zFetch()
	//returns : results, total_pages, total_results, page
  return async (dispatch)=>{
		const {page, total_pages, results} = await movieFetch.getList(1)
		dispatch({
			type: 'getMovies',
			result: {
				list: results, 
				pagination: {page, total_pages}
			},
		})
		dispatch(actionSortMovies())
	}
}
export const actionGetGenres = ()=>{
	const movieFetch = new zFetch()
  return async dispatch=>dispatch({
		type: 'getGenres',
		result: await movieFetch.getGenres(),
	})
}

const reducers = {
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

export default (state = defaultState, action) => {
	const { type, result } = action
	return !reducers[type]?state:reducers[type](state, result)
}