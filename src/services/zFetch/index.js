import axios from 'axios'
/*
Just wanted a clean way to make calls	|>
* getList => /genres/get-movie-list
* getPlaying => /movies/get-now-playing
*/
export default class zFetcher {
	async getList(page) {
		const { data } = await instance.get('/movie/now_playing', {
			params: {
				page: page | '1',
			},
		})
		return data
	}
	async getGenres() {
		const { data } = await instance.get('/genre/movie/list')
		return data
	}
}
// private
const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	timeout: 5000,
	params: {
		api_key: 'ddbeb6afdd9a0bdfe4cac61c27bfbc80',
		language: 'en-US',
	},
})

/*
	https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1
	https://developers.themoviedb.org/3/movies/get-now-playing
	https://developers.themoviedb.org/3/genres/get-movie-list
*/
