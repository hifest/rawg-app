import './app.scss'
import GameList from '../gameList/GameList'
import Header from '../Header/Header'
const App = () => {
	return (
		<>
			<div className='app'>
				<Header />
				<GameList />
			</div>
		</>
	)
}

export default App
