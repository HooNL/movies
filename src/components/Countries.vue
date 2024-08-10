<template>
	<article class="container">
		<section class="row">
			<div class="col-md-6">
				<h2 class="display-4">Countries from API</h2>

				<button
					class="btn btn-success mx-1"
					@click="fetchLanden()"
				>
					Fetch</button
				><button
					class="btn btn-danger mx-1"
					@click="clearLanden()"
				>
					Clear
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
				<!-- Lijst met landen -->
				<ul
					class="list-group"
					v-if="countries && countries.length"
				>
					<li
						class="list-group-item"
						v-for="(land, index) in countries"
						:key="index"
					>
						<h5>{{ land.name.common }}</h5>
						<!-- 	<span class="">
							<img
								class="imgFlag"
								:src="land.flags.png"
								:alt="`De foto van ${land.name.common} is niet geladen`"
							/>
						</span> -->
						<p class="lead">
							{{ land.capital ? land.capital[0] : land.capital }}
							<br />
							NL: {{ land.translations.nld.official }}
						</p>
					</li>
				</ul>
			</div>

			<!-- Details van landen -->
			<div class="col-md-6"></div>
		</section>
	</article>
</template>  

<script>
	import { useCountryStore } from "@/stores/countries"
	export default {
		name: "Countries",
		data() {
			return {
				store: useCountryStore(),
			}
		},
		methods: {
			fetchLanden() {
				this.store.fetchCountries()
			},
			clearLanden() {
				this.store.clearCountries()
			},
		},
		computed: {
			countries() {
				return this.store.countries
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
</style>
