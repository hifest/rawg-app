import { configureStore, combineReducers } from '@reduxjs/toolkit'
import games from '../components/gameList/gameListSlice'
import searchGames from '../components/Header/headerSlice'
import singleGame from '../pages/SinglePage/singlePageSlice'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage,
}
const rootReducer = combineReducers({
	games,
	searchGames,
	singleGame,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)
export default store
