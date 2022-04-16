import { configureStore } from '@reduxjs/toolkit'
import games from '../components/gameList/gameListSlice'
import searchGames from '../components/Header/headerSlice'
import singleGame from '../pages/SinglePage/singlePageSlice'
// const stringMiddleware = () => next => action => {
// 	if (typeof action === 'string') {
// 		return next({
// 			type: action,
// 		})
// 	}
// 	return next(action)
// }

const store = configureStore({
	reducer: {
		games,
		searchGames,
		singleGame,
	},
	// middleware: getDefaultMiddleware =>
	// 	getDefaultMiddleware().concat(stringMiddleware),
	devTools: process.env.NODE_ENV !== 'production',
})

export default store

// I'm sorry.
