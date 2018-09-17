import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, PersistGate, store, persistor } from './redux/config'
import './index.css'
import App from './App'
if (process.env.NODE_ENV !== 'production') {
	const { whyDidYouUpdate } = require('why-did-you-update')
	whyDidYouUpdate(React, {
		groupByComponent: true,
		collapseComponentGroups: false,
	})
}

const appRootElement = document.getElementById('root')
if (appRootElement){
	ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
		<App />
		</PersistGate>
	</Provider>, appRootElement)
}
