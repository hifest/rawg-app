import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchGames } from './headerSlice'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import './Header.scss'
function Header() {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')
	const [popup, setPopup] = useState(false)
	const { searchGames, searchGamesLoadingStatus } = useSelector(
		state => state.searchGames
	)
	const { savedGames } = useSelector(state => state.games)
	let uniqueArr = savedGames.filter(
		(a, i) => savedGames.findIndex(s => a.name === s.name) === i
	) 
	const navigate = useNavigate()
	useEffect(() => {
		if (value.trimStart().length >= 1) {
			setPopup(true)
			dispatch(fetchSearchGames(value))
		} else {
			setPopup(false)
		}
	}, [value])
	const onCardClick = slug => {
		return () => {
			navigate(`game/${slug}`)
			setPopup(false)
			setValue('')
		}
	}
	const renderSearchGames = arr => {
		if (!arr.length) {
			return <h1 className='header__text'>Ігор не знайдено!</h1>
		}
		return arr.map(item => (
			<div
				onClick={onCardClick(item.slug)}
				className='header__dropdown_el'
				key={item.id + item.rating}
			>
				<img
					alt='Game image'
					className='header__img'
					src={item.background_image}
				></img>
				{item.name}
			</div>
		))
	}
	return (
		<>
			<div className='container'>
				<div className='header'>
					<AiOutlineSearch />
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
				<Link to='/whitelist' className='link'>
					Go to your: {uniqueArr.length} saved games
				</Link>
				{/* я знаю що він завжди буде тут навіть коли перейдеш на сторінку я потім стилі добавлю і пофікшу не парся */}
			</div>
		</>
	)
}

export default Header
