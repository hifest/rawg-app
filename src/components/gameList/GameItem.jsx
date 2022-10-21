import React, { useState } from 'react'
import AddToWhiteList from './AddToWhiteList'
import { Link } from 'react-router-dom'
import loadingImage from '../../image/loading.png'
const GameItem = ({ item, addToWhitelistFunc }) => {
	const [imageLoading, setImageLoading] = useState(true)
	return (
		<div className='gameList__games_block'>
			<Link to={`/game/${item.slug}`}>
				<img
					onLoad={() => setImageLoading(false)}
					src={imageLoading ? loadingImage : item.background_image}
					alt='game'
				/>
			</Link>
			<p className='gameList__name'> 🎮{item.name}🎮</p>

			<div className='gameList__block'>
				<p className='gameList__textAleft'>
					Год випуска: {item.released} <br />
					Жанри:{item.genres.slice(0, 2).map(item => ` ${item.name}`)}
				</p>
				<AddToWhiteList item={item} addToWhitelistFunc={addToWhitelistFunc} />
			</div>
		</div>
	)
}

export default GameItem
