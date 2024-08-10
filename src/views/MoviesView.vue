<template>
	<article class="container">
		<section class="row">
			<div class="col-md-6">
				<h2 class="display-4">Movies from OMDB</h2>
				<input
					v-model="word"
					type="text"
					class="form-control mb-2"
					@keyup.enter="fetchMovies(word)"
				/>
				<span
					class="text-red fs-1 z-3 d-flex float-end top"
					@click="wisText"
					>&times;</span
				>
				<button
					class="btn btn-success mx-1"
					@click="fetchMovies()"
				>
					Zoeken</button
				><button
					class="btn btn-danger mx-1"
					@click="clearMovies()"
				>
					Wissen
				</button>

				<!-- Loading -->
				<div class="bg-warning rounded mt-2">
					<h3
						v-if="!loading"
						class="p-2"
					>
						Loading ...
					</h3>
				</div>

				<!-- Errors -->
				<div
					v-if="error"
					class="alert alert-danger mt-4"
				>
					<h3>Errors</h3>
					<p class="lead">{{ error }}</p>
				</div>
				<!-- Lijst met films -->
				<ul
					class="list-group"
					v-if="movies && movies.length"
				>
					<li
						class="list-group-item "
						v-for="movie in movies"
						:key="movie"
						@click="getMovie(movie.imdbID)"
					>
						<h5>{{ movie.Title }}  {{ movie.Year }}</h5>

						
						<img
							:src="imgUrl(movie.Poster)"
							alt="Poster"
							class="img-fluid rounded-2 w-25 d-flex"
						/>
					</li>
				</ul>
			</div>
			<div class="col-md-6">
				<Movie />
			</div>
		</section>
	</article>
</template>

<script>
	import { useMoviesStore } from "@/stores/movies.js"
	import Movie from "@/components/Movie.vue"
	export default {
		name: "Movies",
		data() {
			return {
				store: useMoviesStore(),
				word: "",
				movie: "",
			}
		},
		components: { Movie },
		methods: {
			fetchMovies() {
				this.store.fetchMovies(this.word)
			},
			getMovie(id) {
				this.store.getMovie(id)
				// this.$router.push('./movies/movie')
			},
			clearMovies() {
				this.store.clearMovies()
			},
			wisText() {
				this.word = ""
			},
		},
		computed: {
			movies() {
				return this.store.movies
			},
			loading() {
				return this.store.loadingStatus === "notloading"
			},
			error() {
				return this.store.errors
			},
		},
	}
</script>

<style scoped>
	.imgFlag {
		max-width: 80px;
		border: 1px solid gray;
		border-radius: 7px;
		float: right;
	}

	.top {
		margin-top: -3.2rem;
		margin-right: 0.5rem;
		cursor: pointer;

		@media screen and (min-width: 780px) {
			margin-top: -3.8rem;
		}
	}

	li {
		cursor: pointer;
	}
</style>
