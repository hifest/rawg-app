import React from 'react'
import GamesFilter from '../../components/gamesFilter/GamesFilter'
import GameList from '../../components/gameList/GameList'
const Home = () => {
	return (
		<div className='app'>
			<GamesFilter />
			<GameList />
		</div>
	)
}

export default Home