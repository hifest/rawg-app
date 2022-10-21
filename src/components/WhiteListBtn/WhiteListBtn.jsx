import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const WhiteListBtn = () => {
	const { savedGames } = useSelector(state => state.games)
	let uniqueArr = savedGames.filter(
		(a, i) => savedGames.findIndex(s => a.name === s.name) === i
	)
	return (
		<Link to='/whitelist' className='link'>
			{uniqueArr.length > 0 ? (
				<button className='btn'>{uniqueArr.length} - saved Games</button>
			) : (
				<button className='btn'>Whitelist</button>
			)}
		</Link>
	)
}

export default WhiteListBtn
