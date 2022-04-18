import {React,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import './whiteList.scss'
function WhiteListPage() {
    const navigate = useNavigate()
    const {savedGames } = useSelector(
		state => state.games
	)
const goBack = () => navigate(-1)///успішно спіждено з твого коду))
    let uniqueArr = savedGames.filter((a, i) => savedGames.findIndex((s) => a.name === s.name) === i); //видаляем дубликати
    //https://qna.habr.com/q/1141864?e=12574862#answer_item_2152600 пізда чел умний нахуй
   const renderSaveGames = (games) => {
        return games.map(item=>{
           return(
            <div className="whitelist__box">
              <img src={item.backgroundImage} alt="" />
                <Link to={`/game/${item.slug}`} className="whitelist__box__name">{item.name}</Link>
            </div>
           )
       })
   }
  return (
    <div className="container">
                  <button onClick={goBack} style={{ color: 'red' }}>
                GO BACK
            </button> 
        <div className="whitelist">
        {savedGames.length > 1 ? 
            renderSaveGames(uniqueArr) : 'Виберете игри'
        }
      </div>
    </div>
  )
}

export default WhiteListPage

//https://open.spotify.com/track/4k8pab2VcnRFoEotbGav0g?si=96ed2a0aa2b44e4d// послухай тобі зайде думаю

//ПУТІН ХУЙЛО