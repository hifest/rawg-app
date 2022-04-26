import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useHttp } from '../../hooks/http.hook'

const initialState = {
	game: {},
	gameLoadingStatus: 'idle',
	screen: []
}

export const fetchSingleGame = createAsyncThunk(
	'game/fetchSingleGame',
	async name => {
		const { request } = useHttp()
		return await request(
			`https://api.rawg.io/api/games/${name}?key=e2f90b4e56164fc6996b2abb0faa856e`
		)
	}
)

const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {

	},
	extraReducers: builder => {
		builder
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
			.addDefaultCase(() => {})
	},
})

const { actions, reducer } = gameSlice

export default reducer