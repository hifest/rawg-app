import './app.scss'
import GameList from '../gameList/GameList'
import Header from '../Header/Header'
import GamesFilter from '../gamesFilter/GamesFilter'
const App = () => {
	return (
		<>
			<div className='app'>
				<Header />
				<GamesFilter/>
				<GameList />
			</div>
		</>
	)
}

export default App
