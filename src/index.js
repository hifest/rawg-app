import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './components/app/App.jsx'
import store from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store/store'
import './styles/index.scss'
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
