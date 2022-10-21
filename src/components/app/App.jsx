import { Route, Routes } from 'react-router-dom'
import './app.scss'
import Header from '../Header/Header'
import Home from '../../pages/Home/Home'
import SinglePage from '../../pages/SinglePage/SinglePage'
import WhiteListPage from '../../pages/WhitelistPage/WhiteListPage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/game/:name' element={<SinglePage />} />
				<Route path='/whitelist' element={<WhiteListPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	)
}

export default App
