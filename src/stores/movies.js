import { defineStore } from "pinia"
import axios from "axios"

//http://www.omdbapi.com/?apikey=[yourkey]&
//http://www.omdbapi.com/?t=Avatar&plot=full
//http://img.omdbapi.com/?apikey=[yourkey]&
//+ "&s=Avatar&type=movie"
const myId = "?apikey=132037ff"
const oneName = "&t=Avatar&plot=full"
const url = "http://www.omdbapi.com/?apikey=132037ff&s="
const urlI = "http://www.omdbapi.com/?apikey=132037ff&i="

export const useMoviesStore = defineStore("movies", {
	state: () => {
		return {
			loadingStatus: "notloading",
			movies: [],
			errors: null,
			selectedMovie: "",
		}
	},
	actions: {
		// Get Data From API
		fetchMovies(word) {
			this.loadingStatus = "loading"

			// Http-Request
			axios
				.get(url + word)
				.then((result) => {
					// Alles OK, wij hebben resultaat
					this.loadingStatus = "notloading"
					this.movies = result.data.Search
					// console.log(this.movies)
				})
				.catch((err) => {
					this.loadingStatus = "notloading"
					this.movies = []
					this.errors = err
				})
		},

		// Een Film hebben
		getMovie(id) {
			axios
				.get(urlI + id)
				.then((result) => {
					// Alles OK, wij hebben resultaat
					this.selectedMovie = result.data
					console.log(this.selectedMovie)
				})
				.catch((err) => {
					this.movies = []
					this.errors = err
				})
		},

		// Remove de data
		clearMovies() {
			this.loadingStatus = "notloading"
			this.movies = []
			this.errors = null
		},
	},
	getters: {},
})
