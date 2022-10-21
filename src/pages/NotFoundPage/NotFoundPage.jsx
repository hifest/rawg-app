import React from 'react'
import {Link} from 'react-router-dom'
const NotFoundPage = () => {
	return (
		<>
		<Link to='/'>Home</Link>
		<div style={{color: 'white', fontSize: 30}}>NotFoundPage</div>
		</>
	)
}

export default NotFoundPage