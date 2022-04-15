import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useHttp } from '../../hooks/http.hook'

const initialState = {
	searchGames: [],
	searchGamesLoadingStatus: 'idle',
}

export const fetchSearchGames = createAsyncThunk(
	'games/fetchSeachGames',
	async search => {
		const { request } = useHttp()
		return await request(
			`https://api.rawg.io/api/games?key=e2f90b4e56164fc6996b2abb0faa856e&search=${search}`
		)
	}
)

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchSearchGames.pending, state => {
				state.searchGamesLoadingStatus = 'loading'
			})
			.addCase(fetchSearchGames.fulfilled, (state, action) => {
				state.searchGamesLoadingStatus = 'idle'
				state.searchGames = action.payload
			})
			.addCase(fetchSearchGames.rejected, state => {
				state.searchGamesLoadingStatus = 'error'
			})
			.addDefaultCase(() => {})
	},
})

const { actions, reducer } = searchSlice

export default reducer

export const {} = actions
