import { Route, Routes } from 'react-router-dom'
import './app.scss'
import Header from '../Header/Header'
import Home from '../../pages/Home/Home.jsx'
import SinglePage from '../../pages/SinglePage/SinglePage'
const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/game/:name' element={<SinglePage />}></Route>
			</Routes>
		</>
	)
}

export default App
