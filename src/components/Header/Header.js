import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchGames } from './headerSlice'
import './Header.scss'
function Header() {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')
	const [popup, setPopup] = useState(false)
	const { searchGames, searchGamesLoadingStatus } = useSelector(
		state => state.searchGames
	)
	useEffect(() => {
		if (value.trimStart().length > 1) {
			setPopup(true)
			dispatch(fetchSearchGames(value))
		}
		if (value.trimStart().length < 1) {
			setPopup(false)
		}
	}, [value])

	const renderSearchGames = arr => {
		if (!arr) {
			return <h5>Ігри не найдені, перезагрузіть сторінку!</h5>
		}
		return arr.map(item => {
			return (
				<div key={item.id}>
					<p className='t-a-l'>
						Name: {item.name}
						<br />
						Рейтинг: {item.rating} <br />
						Играть ч. : {item.playtime}
					</p>
				</div>
			)
		})
	}
	return (
		<>
			<div className='container'>
				<div className='block'>
					<input
						value={value}
						onChange={e => setValue(e.target.value)}
						placeholder='search'
						className='input'
						type='text'
					/>
				</div>
				<div>
					{popup ? (
						searchGamesLoadingStatus === 'error' ? (
							<h1>error</h1>
						) : searchGamesLoadingStatus === 'loading' ? (
							<h1>загрузка...</h1>
						) : (
							renderSearchGames(searchGames.results)
						)
					) : null}
				</div>
			</div>
		</>
	)
}

export default Header
