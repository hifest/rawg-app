import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useHttp } from '../../hooks/http.hook'

const initialState = {
	games: [],
	gamesLoadingStatus: 'idle',
}

export const fetchGamesList = createAsyncThunk(
	'games/fetchGamesList',
	async page_size => {
		const { request } = useHttp()
		return await request(
			`https://api.rawg.io/api/games?key=e2f90b4e56164fc6996b2abb0faa856e&page_size=${page_size}`
		)
	}
)

const gamesSlice = createSlice({
	name: 'games',
	initialState,
	reducers: {},
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

export const {} = actions
