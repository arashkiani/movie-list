/* global  */
import zFetch from '.'
import movies from '../../mocks/movies'
import genres from '../../mocks/genres'

jest.mock('.')
describe('Test our little zFetch', () => {
	it('fetch Products', async done => {
		const movieFetch = new zFetch()
		const list = await movieFetch.getList()
		expect(list).toEqual(movies)
		done()
	})
	it('fetch genres', async done => {
		const movieFetch = new zFetch()
		const list = await movieFetch.getGenres()
		expect(list).toEqual(genres)
		done()
	})
})
