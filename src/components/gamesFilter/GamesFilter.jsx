import { React, useState, useEffect } from "react";
import { changeActiveFilter } from "../gameList/gameListSlice";
import { useDispatch } from "react-redux";
import Select from "react-select";
import './gamesFilter.scss'
function GamesFilter() {
	const dispatch = useDispatch()
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
	const [selectedOption, setSelectedOption] = useState({
		value: 'action',
		label: 'Action',
	})

	useEffect(() => {
		dispatch(changeActiveFilter(selectedOption.value))
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
//паша з стилями хуйня https://react-select.com/styles#provided-styles-and-state пробуй сам я заєбався

export default GamesFilter;
