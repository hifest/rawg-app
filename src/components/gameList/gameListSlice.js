import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useHttp } from '../../hooks/useHttp'
const initialState = {
	games: [],
	gamesLoadingStatus: 'idle',
	savedGames: [],
	activeFilterObj: {
		value: 'action',
		label: 'Action',
	},
}
// const { REACT_APP_API_KEY } = process.env
export const fetchGamesList = createAsyncThunk(
	'games/fetchGamesList',
	async (page_size, activeFilter) => {
		let filter = activeFilter.getState().games.activeFilterObj.value
		const { request } = useHttp()
		return await request(
			`https://api.rawg.io/api/games?key=e2f90b4e56164fc6996b2abb0faa856e&genres=${filter}&page_size=${page_size}`
		)
	}
)

export const gamesSlice = createSlice({
	name: 'games',
	initialState,
	reducers: {
		changeActiveFilter: (state, action) => {
			state.activeFilter = action.payload
		},
		addToWhitelist: (state, action) => {
			state.savedGames = [...state.savedGames, action.payload]
		},
		deleteFromWhiteList: (state, action) => {
			state.savedGames = state.savedGames.filter(
				game => game.id !== action.payload
			)
		},
		changeActiveFilterObj: (state, action) => {
			state.activeFilterObj = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchGamesList.pending, state => {
				state.gamesLoadingStatus = 'loading'
			})
			.addCase(fetchGamesList.fulfilled, (state, action) => {
				state.gamesLoadingStatus = 'idle'
				state.games = action.payload
			})
			.addCase(fetchGamesList.rejected, state => {
				state.gamesLoadingStatus = 'error'
			})
			.addDefaultCase(() => {})
	},
})
const { actions, reducer } = gamesSlice

export default reducer

export const { addToWhitelist, deleteFromWhiteList, changeActiveFilterObj } =
	actions
