import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import thunk from 'redux-thunk'
import MOVIES from './movies'
import FILTERS from './filters'

const Reducers = {
	MOVIES,
	FILTERS,
}

const persistedReducer = persistReducer(
	{
		key: 'movieListAsh',
		storage,
		whitelist: ['FILTERS'],
	},
	combineReducers(Reducers)
)
const myApplyMiddleware =
	process.env.NODE_ENV !== 'production'
		? composeWithDevTools(applyMiddleware(thunk))
		: applyMiddleware(thunk)

const store = createStore(persistedReducer, myApplyMiddleware)
const persistor = persistStore(store)
export { Provider, PersistGate, store, persistor }
