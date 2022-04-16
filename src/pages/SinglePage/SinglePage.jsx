import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchSingleGame } from './singlePageSlice'
const SinglePage = () => {
	const { game, gameLoadingStatus } = useSelector(state => state.singleGame)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { name } = useParams()
	React.useEffect(() => {
		dispatch(fetchSingleGame(name))
	}, [name])
	const goBack = () => navigate(-1)
	return (
		<>
			<button onClick={goBack} style={{ color: 'white' }}>
				GO BACK
			</button>
			{gameLoadingStatus === 'loading' ? (
				<h1>loading...</h1>
			) : gameLoadingStatus === 'error' ? (
				<h1>error</h1>
			) : (
				<div style={{ color: 'white' }}>{game.name}</div>
			)}
		</>
	)
}

export default SinglePage
