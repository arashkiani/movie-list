import defaultState from './movies.default'

export const actionSortMovies = ()=>{

	return (dispatch, getState)=>{
		const {MOVIES, FILTERS} = getState()
		const list = [...MOVIES.list]
		const {filterByGenres, filterByRange } = FILTERS
		// filter out the movies we dont need
		const filteredMovies = list.filter((movie)=>{
			const inRange = parseInt(movie.vote_average,10)>=filterByRange
			const passedGenreSelection = !filterByGenres.length || filterByGenres.filter(option=>(movie.genre_ids.includes(option))).length
			return passedGenreSelection && inRange
		})
		// sort the limited list
		const sortedMovies = filteredMovies.sort((a, b)=>(!a.popularity - b.popularity))
		dispatch({
			type: 'sortedList',
			result: sortedMovies,
		})
	}
}

export const actionUpdateGenresFilter = ({value})=>{
	const genreId = parseInt(value,10);
	return (dispatch, getState)=>{
		const state = getState()
		const filterByGenres = [...state.FILTERS.filterByGenres]
		const index = filterByGenres.indexOf(genreId)
		//push and pop ☺
		if(index>=0){
			filterByGenres.pop(genreId)
		} else {
			filterByGenres.push(genreId)
		}
		dispatch({
			type: 'updateGenresFilter',
			result: filterByGenres,
		})
		dispatch(actionSortMovies())
	}
}
export const actionUpdateRangeFilter = ({value})=>{
	return (dispatch)=>{
		dispatch({
			type: 'updateRangeFilter',
			result: parseInt(value,10),
		})
		dispatch(actionSortMovies())
	}
}
export const reducers = {
	updateGenresFilter: (state, result) => ({
		...state,
		filterByGenres: result
	}),
	updateRangeFilter: (state, result) => ({
		...state,
		filterByRange: result
	})
}

export default (state = defaultState, action) => {
	const {type, result } = action
	return !reducers[type]? state: reducers[type](state, result)
}