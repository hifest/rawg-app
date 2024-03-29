import { React, useState, useEffect } from 'react'
import { changeActiveFilterObj } from '../gameList/gameListSlice'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import './gamesFilter.scss'

function GamesFilter() {
	const dispatch = useDispatch()
	const { activeFilterObj } = useSelector(state => state.games)
	const options = [
		{ value: 'action', label: 'Action' },
		{ value: 'adventure', label: 'Adventure' },
		{ value: '5', label: 'RGP' },
		{ value: '10', label: 'Strategy' },
		{ value: '2', label: 'Shooter' },
		{ value: '7', label: 'Puzzle' },
		{ value: '15', label: 'Sport' },
		{ value: '1', label: 'Racing' },
	]
	const [selectedOption, setSelectedOption] = useState(activeFilterObj)

	useEffect(() => {
		dispatch(changeActiveFilterObj(selectedOption))
	}, [selectedOption]) // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className='container'>
			<div className='App'>
				<Select
					defaultValue={selectedOption}
					onChange={setSelectedOption}
					options={options}
				/>
			</div>
		</div>
	)
}

export default GamesFilter
