<template>
	<article
		v-if="movie"
		class="card bg-info-subtle p-2 my-3"
	>
		<h1 class="card-title text-center">{{ movie.Title }}</h1>
		<span
			class="badge rounded-pill text-secondary-emphasis fst-italic bg-info w-auto p-2 text-center mx-3"
			>{{ movie.Genre }}</span
		>

		<div class="row p-4 gap-2 gap-md-0  align-items-center h-auto  " >
			<img
				:src="imgUrl(movie.Poster)"
				alt="Poster"
				class="img-fluid col-md-6 rounded-2 col-sm-12"
			/>
			<p class="card col-md-6  p-1 col-sm-12">
				In het kort:<span
					class="bg-dark-subtle rounded-2 lead p-2 text-dark fw-medium"
					>{{ movie.Plot }}</span
				>
			</p>
		</div>

		<!-- Errors -->
		<div
			v-if="error"
			class="alert alert-danger mt-4"
		>
			<h3>Errors</h3>
			<p class="lead">{{ error }}</p>
		</div>

		<section class="card-body">
			<p class="card text p-1">
				Acteurs:<span
					class="bg-dark-subtle rounded-2 lead p-2 text-dark fw-medium"
					>{{ movie.Actors }}</span
				>
			</p>
			<p class="card text p-1">
				Regisseur(s):<span
					class="bg-dark-subtle rounded-2 lead p-2 text-dark fw-medium"
					>{{ movie.Director }}</span
				>
			</p>
			<p class="card text p-1">
				Schrijvers:<span
					class="bg-dark-subtle rounded-2 lead p-2 text-dark fw-medium"
					>{{ movie.Writer }}</span
				>
			</p>
		
			<p class="card text p-1">
				Awards:<span
					class="bg-dark-subtle rounded-2 lead p-2 text-dark fw-medium"
					>{{ movie.Awards }}</span
				>
			</p>
		</section>
		<div class="card-footer d-flex flex-row text-center">
			<span
				>{{ movie.Released }} <br />
				<img
					src="../assets/fa-icons/calendar-days.svg"
					alt="calender"
					class="img-thumbnail w-25"
				/>
			</span>

			<span
				>{{ movie.imdbRating }} <br />
				<img
					src="../assets/fa-icons/star.svg"
					alt="star"
					class="img-thumbnail w-25"
				/>
			</span>

			<span
				>{{ movie.BoxOffice }} <br /><img
					src="../assets/fa-icons/money-check-dollar.svg"
					alt="dollar"
					class="img-thumbnail w-25"
				/>
			</span>
		</div>
	</article>
	<!-- <button
		class="btn btn-outline-info mb-3"
		@click="this.$router.push('/movies')"
	>
		Terug
	</button> -->
</template>

<script>
	import { useMoviesStore } from "@/stores/movies.js"
	export default {
		name: "Movie",
		created() {},
		data() {
			return {
				store: useMoviesStore(),
			}
		},
		props: {},
		methods: {
			imgUrl(url) {
				return new URL(url, import.meta.url).href
			},
		},
		computed: {
			movie() {
				return this.store.selectedMovie
			},
		},
	}
</script>

<style scoped></style>
