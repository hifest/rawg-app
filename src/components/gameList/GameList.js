import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGamesList } from "./gameListSlice";
import "./gameList.scss";

function GameList() {
  const dispatch = useDispatch();
  const { games, gamesLoadingStatus } = useSelector((state) => state.games);
  useEffect(() => {
    dispatch(fetchGamesList(6)); // 12 - скільки ігор хочеш отримати,не води 69 бо напросишся
  }, []);

  const renderGames = (arr) => {
    if (!arr) {
      return <h5>Ігри не найдені, перезагрузіть сторінку!</h5>;
    }
    return arr.map((item) => {
      return (
        <div key={item.name}>
          <img src={item.background_image}></img>
          {item.name}
            <div className="t-a-l">
              Рейтинг: {item.rating}
            </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="gameList">
        <div className="gameList__games">
          {gamesLoadingStatus == "loading" ? (
            <div> Loading! </div>
          ) : gamesLoadingStatus == "error" ? (
            <h5 className="text-center mt-5"> Ошибка загрузки </h5>
          ) : (
            renderGames(games.results)
          )}
        </div>
        {/* / Цей коментар все пояснює. */}
      </div>
    </div>
  );
}

export default GameList;
