import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchSingleGame,
  fetchScreenshots,
  fetchStores,
} from "./singlePageSlice";
import "./singlePage.scss";
import Slider from "react-slick";
import steam from "../../image/Steam_Logo.png";
import VaginaPingvina from "../../image/Epic_Games_logo.svg.png";
import PizdaTransa from "../../image/pngwing.com.png";
import ILOVENIGGERS from "../../image/ps.png";
const SinglePage = () => {
	const { game, gameLoadingStatus, screen, stores } = useSelector(
		state => state.singleGame
	)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { name } = useParams()
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	React.useEffect(() => {
		dispatch(fetchSingleGame(name))
		dispatch(fetchScreenshots(name))
		dispatch(fetchStores(name))
	}, [name]) // eslint-disable-line react-hooks/exhaustive-deps
	const goBack = () => navigate(-1)
	return (
		<>
			{gameLoadingStatus === 'loading' ? (
				<h1>loading...</h1>
			) : gameLoadingStatus === 'error' ? (
				<h1>error</h1>
			) : (
				<div className='container'>
					<button className='btn' onClick={goBack} style={{ color: 'red' }}>
						GO BACK
					</button>
					<div className='game'>
						<p className='game__name'>{game.name}</p>
						<Slider {...settings}>
							{!screen.results
								? null
								: screen.results.map(item => {
										return (
											<div key={item.id}>
												<img src={item.image} alt='game__image' />
											</div>
										)
								  })}
						</Slider>
						<div className='game__info-box'>
							<div className='game__info-box-left'>
								<p>Rating: {game.rating}</p>
								<p>Playtime: {game.playtime}</p>
							</div>
							<div className='game__info-box-right'>
								<a href={game.website}>Website</a> <br />
								<a href={game.reddit_url}>Reddit</a>
							</div>
						</div>
						<p className='game__description'>{game.description_raw}</p>
						<h3>Where buy?</h3>
						<div className='game__box-link'>
							{!stores.results
								? null
								: stores.results.map(item => {
										return (
											<a className='game__link' href={item.url}>
												<img
													src={
														item.store_id === 1
															? steam
															: item.store_id === 11
															? VaginaPingvina
															: item.store_id === 7
															? PizdaTransa
															: item.store_id === 3
															? ILOVENIGGERS
															: null
													}
													alt=''
												/>
											</a>
										)
								  })}
						</div>
					</div>
				</div>
			)}
		</>
	)
};

export default SinglePage;

//"store_id": 5 - gog.com
//"store_id": 3, - storePlaystation
//"store_id": 1, - steam
//"store_id": 2, - microsoft store
//"store_id": 6, - nintendo
//"store_id": 7, - xbox
//"store_id": 11, - epic games
//singleGames -> stores
//єбися сам
