import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGamesList } from "./gameListSlice";
import "./gameList.scss";

function GameList() {
  const dispatch = useDispatch();
  const { games, gamesLoadingStatus } = useSelector((state) => state.games);
  console.log(gamesLoadingStatus);
  useEffect(() => {
    dispatch(fetchGamesList());
  }, []);
  
  if (gamesLoadingStatus === "loading") {
    return <div> Loading! </div>;
  } else if (gamesLoadingStatus === "error") {
    return <h5 className="text-center mt-5"> Ошибка загрузки </h5>;
  }

  const renderGames = (arr) => {
    if (!arr) {
      return (
        <h5 >
          Ігри не найдені, перезагрузіть сторінку
        </h5>
      );
    }
    return arr.map((item, index) => {
      return <div key={index}> {item.name} </div>;
    });
  };
  const elements = renderGames(games.results);
  return <div> {elements} </div>;
}

export default GameList;
