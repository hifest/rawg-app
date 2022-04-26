import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchSingleGame } from './singlePageSlice'
import { useHttp } from '../../hooks/http.hook'
import './singlePage.scss'
import Slider from "react-slick";
const SinglePage = () => {
	const { game, gameLoadingStatus } = useSelector(state => state.singleGame)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { name } = useParams()
	let screenshots = [];
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	  };
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
						<Slider {...settings}>
						<div>
							<img src={game.background_image} alt="game__image" />
						</div>
						<div>
						<img src={game.background_image_additional} alt="game__image" />
						</div>
						</Slider>
						<div className="game__info-box">
							<div className="game__info-box-left">
								<p>Rating: {game.rating}</p>
								<p>Playtime: {game.playtime}</p>
							</div>
							<div className="game__info-box-right">
								<a href={game.website}>Website</a> <br />
								<a href={game.reddit_url}>Reddit</a>
							</div>
						</div>
						<p className="game__description">
							{game.description_raw}
						</p>
					</div>
				</div>
			)}
		</>
	)
}

export default SinglePage
