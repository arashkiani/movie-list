import movies from '../../../mocks/movies'
import genres from '../../../mocks/genres'

export default class zFetcher {
	async getList(page) {
		return await new Promise(resolve => {
			resolve(movies)
		})
	}
	async getGenres() {
		return await new Promise(resolve => {
			resolve(genres)
		})
	}
}
