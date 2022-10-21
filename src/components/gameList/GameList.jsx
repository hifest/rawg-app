import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useScroll from '../../hooks/useScroll'
import Spinner from '../Spinner/Spinner'
import GameItem from './GameItem'
import { fetchGamesList, addToWhitelist } from './gameListSlice'
import './gameList.scss'
function GameList() {
	const childRef = useRef()
	const limit = useScroll(childRef)
	const dispatch = useDispatch()
	const { games, gamesLoadingStatus, activeFilterObj } = useSelector(
		state => state.games
	)
	useEffect(() => {
		// if (!games?.results?.length > 0) {
		// 	dispatch(fetchGamesList(40, activeFilter))
		// }
		dispatch(fetchGamesList(40, activeFilterObj.value))
	}, [activeFilterObj]) // eslint-disable-line react-hooks/exhaustive-deps
	const addToWhitelistFunc = (id, name, backgroundImage, slug) => {
		dispatch(addToWhitelist({ id, name, backgroundImage, slug }))
	}
	const renderGames = arr => {
		if (!arr) {
			return <h5>Ігри не знайдені, перезагрузіть сторінку!</h5>
		}
		return arr.map(item => {
			return (
				<GameItem key={item.id} item={item} addToWhitelistFunc={addToWhitelistFunc} />
			)
		})
	}
	return (
		<div className='container'>
			<div className='gameList'>
				<div className='gameList__games'>
					{gamesLoadingStatus === 'loading' ? (
						<Spinner />
					) : gamesLoadingStatus === 'error' ? (
						<h5 className='text-center mt-5'> Помилка загрузки</h5>
					) : (
						renderGames(games?.results?.slice(0, limit))
					)}
				</div>
				<div ref={childRef}></div>
				{/* Intersection pbserver */}
			</div>
		</div>
	)
}

export default GameList
