import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {fetchGamesList} from './gameListSlice'
import './gameList.scss'

function GameList() {
    const dispatch = useDispatch();
    const {games, gamesLoadingStatus} = useSelector(state => state.games);
    useEffect(()=>{
        dispatch(fetchGamesList())
            // eslint-disable-next-line
    },[])
    if (gamesLoadingStatus === "loading") {
      return <div>
      Loading!
    </div>;
  } else if (gamesLoadingStatus === "error") {
      return <h5 className="text-center mt-5">Ошибка загрузки</h5>
  }

  const renderGames = (arr) => {
    console.log(arr)
  }
  const elements = renderGames(games.results);
  return (
    <div>
      render
    </div>
  )
}

export default GameList