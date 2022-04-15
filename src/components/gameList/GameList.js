import React from 'react'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGamesList } from './gameListSlice'
import './gameList.scss'

function GameList() {
	const dispatch = useDispatch()
	const [scrollBehave,setScrollBehave] = useState(20)
	const { games, gamesLoadingStatus,activeFilter } = useSelector(state => state.games)
	useEffect(() => {
		let a = activeFilter
		dispatch(fetchGamesList(scrollBehave,a))
	}, [activeFilter])
	const renderGames = arr => {
		if (!arr) {
			return <h5>Ігри не найдені, перезагрузіть сторінку!</h5>
		}
		return arr.map(item => {
			return (
				<div key={item.name}>
					<img alt='Game image' src={item.background_image}></img>
					{item.name}

					<div className='gameList__block'>
						<p className='tal'>
							Рейтинг: {item.rating} <br />
							Играть ч. : {item.playtime}
						</p>
						<p className='tar'>
							Год випуска: {item.released} <br />
							Жанри:{item.genres.slice(0,2).map((item) =>` ${item.name}`)}
						</p>
					</div>
				</div>
			)
		})
	}
	return (
		<div className='container'>
			<div className='gameList'>
				<div className='gameList__games'>
					{gamesLoadingStatus === 'loading' ? (
						<div> Loading! </div>
					) : gamesLoadingStatus === 'error' ? (
						<h5 className='text-center mt-5'> Ошибка загрузки </h5>
					) : (
						renderGames(games.results)
					)}
				</div>
				{/* / Цей коментар все пояснює. */}
			</div>
		</div>
	)
}

export default GameList
