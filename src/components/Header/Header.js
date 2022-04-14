import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchGames } from './headerSlice'
import {AiOutlineSearch} from 'react-icons/ai'
import './Header.scss'
function Header() {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')
	const [popup, setPopup] = useState(false)
	const { searchGames, searchGamesLoadingStatus } = useSelector(
		state => state.searchGames
	)
	useEffect(() => {
		if (value.trimStart().length >= 1) {
			setPopup(true)
			dispatch(fetchSearchGames(value))
		} else {
			setPopup(false)
		}
	}, [value])

	const renderSearchGames = arr => {
		if (!arr.length) {
			return <h1 className='header__text'>Ігор не знайдено!</h1>
		}
		return arr.map(item => (
			<div className='header__dropdown_el' key={item.id + item.rating}>
				<img alt='Game image' className='header__img' src={item.background_image}></img>
				{item.name}
			</div>
		))
	}
	return (
		<>
			<div className='container'>
				<div className='header'>
				<AiOutlineSearch/>
					<input
						value={value}
						onChange={e => setValue(e.target.value)}
						placeholder='Search...'
						className='header__input'
						type='text'
					/>
				</div>
				<div className='header__dropdown'>
					{popup ? (
						searchGamesLoadingStatus === 'error' ? (
							<h1 className='header__text'>error</h1>
						) : searchGamesLoadingStatus === 'loading' ? (
							<h1 className='header__text'>загрузка...</h1>
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
