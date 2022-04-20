import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchSingleGame } from './singlePageSlice'
import './singlePage.scss'
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
			{gameLoadingStatus === 'loading' ? (
				<h1>loading...</h1>
			) : gameLoadingStatus === 'error' ? (
				<h1>error</h1>
			) : (
				<div className="container">
					<button className="btn" onClick={goBack} style={{ color: 'red' }}>
						GO BACK
					</button>
					<div className="game">
						<p className="game__name">{game.name}</p>
						<img src={game.background_image} alt="" />
					</div>
				</div>
			)}
		</>
	)
}

export default SinglePage
