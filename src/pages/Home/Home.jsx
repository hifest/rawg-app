import React from 'react'
import GamesFilter from '../../components/gamesFilter/GamesFilter.js'
import GameList from '../../components/gameList/GameList'
import Footer from '../../components/Footer/Footer.js'
const Home = () => {
	return (
		<div className='app'>
			<GamesFilter />
			<GameList />
		</div>
	)
}

export default Home