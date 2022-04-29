import { Route, Routes } from 'react-router-dom'
import './app.scss'
import Header from '../Header/Header'
import Home from '../../pages/Home/Home'
import SinglePage from '../../pages/SinglePage/SinglePage'
import WhiteListPage from '../../pages/WhitelistPage/WhiteListPage'
const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/game/:name' element={<SinglePage />}></Route>
				<Route path='/whitelist' element={<WhiteListPage />}></Route>
			</Routes>
		</>
	)
}

export default App
