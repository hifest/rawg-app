import React from 'react'
import { useEffect, useState,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGamesList } from './gameListSlice'
import './gameList.scss'
import { Link } from 'react-router-dom'


function GameList() {
	const parentRef = useRef()
	const childRef = useRef()
	const dispatch = useDispatch()
	const [scrollBehave, setScrollBehave] = useState(20)
	const { games, gamesLoadingStatus, activeFilter } = useSelector(
		state => state.games
	)

	useEffect(() => {
		dispatch(fetchGamesList(scrollBehave, activeFilter))
	}, [activeFilter])

	// useEffect(() => {
	// 	document.addEventListener('scroll', scrollHandler)
	// 	return function (){
	// 		document.removeEventListener('scroll', scrollHandler)
	// 	};
	// })
	// const scrollHandler = (e) =>{
	// 	if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100){
	// 		dispatch(fetchGamesList(scrollBehave, activeFilter))
	// 	}
	// }
	const renderGames = arr => {
		if (!arr) {
			return <h5>Ігри не найдені, перезагрузіть сторінку!</h5>
		}
		return arr.map(item => {
			return (
				<div ref={parentRef}>
						<Link  to={`/game/${item.slug}`}>
							<img src={item.background_image} alt='game-image' />
						</Link>
						<p className='gameList__name'>{item.name}</p>

						<div className='gameList__block'>
							<p className='gameList__textAleft'>
								Рейтинг: {item.rating} <br />
								Играть ч. : {item.playtime}
							</p>
							<p className='gameList__textARight'>
								Год випуска: {item.released} <br />
								Жанри:{item.genres.slice(0, 2).map(item => ` ${item.name}`)}
							</p>
						</div>
						<div ref={childRef}></div>
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
