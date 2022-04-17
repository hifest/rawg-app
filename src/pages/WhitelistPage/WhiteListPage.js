import {React,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
function WhiteListPage() {
    const navigate = useNavigate()
    const {savedGames } = useSelector(
		state => state.games
	)
const goBack = () => navigate(-1)
console.log(savedGames)
   const renderSaveGames = (games) => {
        return games.map(item=>{
           return(
            <div className="">
                <p>{item.name}</p>
                <img src={item.backgroundImage} alt="" />
            </div>
           )
       })
   }
  return (
    <div className="container">
        {savedGames.length > 1 ? 
            renderSaveGames(savedGames) :
            <button onClick={goBack} style={{ color: 'red' }}>
                GO BACK
            </button> 
        }
    </div>
  )
}

export default WhiteListPage