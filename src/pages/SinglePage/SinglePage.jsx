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
			<button onClick={goBack} style={{ color: 'red' }}>
				GO BACK
			</button>
			{gameLoadingStatus === 'loading' ? (
				<h1>loading...</h1>
			) : gameLoadingStatus === 'error' ? (
				<h1>error</h1>
			) : (
				<div className="container">
					<div className="game">
						<p className="game__name">{game.name}</p>
						<img src={game.background_image} alt="" />
					</div>
					{/* <div className="game__descr">
						{game.description}
					</div>  я потім зроблю кнопку show more, show less*/} 
				</div>
			)}
		</>
	)
}

export default SinglePage
