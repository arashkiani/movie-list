/* global  */
import { Provider, PersistGate, store, persistor } from './config'

describe('redux Configs', () => {
	it('Making sure all the needed options are exported', () => {
		expect(typeof Provider).toEqual('function')
		expect(typeof PersistGate).toEqual('function')
		expect(typeof store).toEqual('object')
		expect(typeof persistor).toEqual('object')
	})
})
