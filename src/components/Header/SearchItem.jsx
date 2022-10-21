import React from 'react'

const SearchItem = ({ item, onCardClick }) => {
	return (
		<div onClick={onCardClick(item.slug)} className='header__dropdown_el'>
			<img alt='Game' className='header__img' src={item.background_image}></img>
			{item.name}
		</div>
	)
}

export default SearchItem
