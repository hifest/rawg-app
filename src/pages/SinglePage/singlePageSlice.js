import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useHttp } from '../../hooks/useHttp'

const initialState = {
	game: {},
	gameLoadingStatus: 'idle',
	screen: [],
	stores: [],
}
const { REACT_APP_API_KEY } = process.env
export const fetchSingleGame = createAsyncThunk(
	'game/fetchSingleGame',
	async name => {
		const { request } = useHttp()
		return await request(
			`https://api.rawg.io/api/games/${name}?key=${REACT_APP_API_KEY}`
		)
	}
)
export const fetchScreenshots = createAsyncThunk(
	'game/fetchScreenshots',
	async name => {
		const { request } = useHttp()
		return await request(
			`https://api.rawg.io/api/games/${name}/screenshots?key=${REACT_APP_API_KEY}`
		)
	}
)
export const fetchStores = createAsyncThunk('game/fetchStores', async name => {
	const { request } = useHttp()
	return await request(
		`https://api.rawg.io/api/games/${name}/stores?key=${REACT_APP_API_KEY}`
	)
})
const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			//
			.addCase(fetchSingleGame.pending, state => {
				state.gameLoadingStatus = 'loading'
			})
			.addCase(fetchSingleGame.fulfilled, (state, action) => {
				state.gameLoadingStatus = 'idle'
				state.game = action.payload
			})
			.addCase(fetchSingleGame.rejected, state => {
				state.gameLoadingStatus = 'error'
			})

			.addCase(fetchScreenshots.pending, state => {
				state.gameLoadingStatus = 'loading'
			})
			.addCase(fetchScreenshots.fulfilled, (state, action) => {
				state.gameLoadingStatus = 'idle'
				state.screen = action.payload
			})
			.addCase(fetchScreenshots.rejected, state => {
				state.gameLoadingStatus = 'error'
			})

			.addCase(fetchStores.pending, state => {
				state.gameLoadingStatus = 'loading'
			})
			.addCase(fetchStores.fulfilled, (state, action) => {
				state.gameLoadingStatus = 'idle'
				state.stores = action.payload
			})
			.addCase(fetchStores.rejected, state => {
				state.gameLoadingStatus = 'error'
			})
			.addDefaultCase(() => {})
	},
})

const { reducer } = gameSlice

export default reducer
