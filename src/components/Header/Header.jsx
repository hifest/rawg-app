import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchGames } from './headerSlice'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate, useLocation } from 'react-router-dom'
import useDebounce from '../../hooks/useDebounce'
import SearchItem from './SearchItem'
import './Header.scss'
import WhiteListBtn from '../WhiteListBtn/WhiteListBtn'
function Header() {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')
	const debouncedValue = useDebounce(value, 600)
	const [popup, setPopup] = useState(false)
	const { searchGames, searchGamesLoadingStatus } = useSelector(
		state => state.searchGames
	)
	const location = useLocation()
	const navigate = useNavigate()
	useEffect(() => {
		if (value.trimStart().length >= 1) {
			setPopup(true)
			dispatch(fetchSearchGames(value))
		} else {
			setPopup(false)
		}
	}, [debouncedValue]) // eslint-disable-line react-hooks/exhaustive-deps
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
			<SearchItem
				key={item.id + item.rating}
				item={item}
				onCardClick={onCardClick}
			/>
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
				{location.pathname !== '/whitelist' && <WhiteListBtn />}
			</div>
		</>
	)
}

export default Header
