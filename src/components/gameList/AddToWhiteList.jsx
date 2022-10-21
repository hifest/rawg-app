import React from 'react'
import { deleteFromWhiteList } from './gameListSlice'
import { useDispatch, useSelector } from 'react-redux'
const AddToWhiteList = ({ addToWhitelistFunc, item }) => {
	const dispatch = useDispatch()
	const { savedGames } = useSelector(state => state.games)
	return (
		<>
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
		</>
	)
}

export default AddToWhiteList
