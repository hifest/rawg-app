import React, { useRef } from 'react'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useScroll from '../../hooks/useScroll'
import {
	fetchGamesList,
	addToWhitelist,
	deleteFromWhiteList,
} from './gameListSlice'
import './gameList.scss'
import { Link } from 'react-router-dom'
function GameList() {
	const childRef = useRef()
	const limit = useScroll(childRef)
	const dispatch = useDispatch()
	const { games, gamesLoadingStatus, activeFilter, savedGames } = useSelector(
		state => state.games
	)

	useEffect(() => {
		// if (!games?.results?.length > 0) {
		// 	dispatch(fetchGamesList(40, activeFilter))
		// }
		dispatch(fetchGamesList(40, activeFilter))
	}, [activeFilter]) // eslint-disable-line react-hooks/exhaustive-deps

	const addToWhitelistFunc = (id, name, backgroundImage, slug) => {
		dispatch(addToWhitelist({ id, name, backgroundImage, slug }))
	}
	const renderGames = arr => {
		if (!arr) {
			return <h5>Ігри не найдені, перезагрузіть сторінку!</h5>
		}
		return arr.map(item => {
			return (
				<div key={item.id}>
					<Link to={`/game/${item.slug}`}>
						<img src={item.background_image} alt='game' />
					</Link>
					<p className='gameList__name'> 🎮{item.name}🎮</p>

					<div className='gameList__block'>
						<p className='gameList__textAleft'>
							Год випуска: {item.released} <br />
							Жанри:{item.genres.slice(0, 2).map(item => ` ${item.name}`)}
						</p>
						{savedGames.some(game => game.id === item.id) ? (
							<button
								onClick={() => dispatch(deleteFromWhiteList(item.id))}
								className='gameList__haveWhitelist'
							>
								✅
							</button>
						) : (
							<button
								className='btn'
								onClick={() => {
									addToWhitelistFunc(
										item.id,
										item.name,
										item.background_image,
										item.slug
									)
								}}
							>
								Add to whitelist ➕
							</button>
						)}
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
						renderGames(games.results?.slice(0, limit))
					)}
				</div>
				<div ref={childRef}></div>
			</div>
		</div>
	)
}

export default GameList
