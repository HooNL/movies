<template>
	<h1 class="display-5">Teller</h1>
	<h1 class="display-3">{{ counter }}</h1>
	<p class="lead">Kies een nummer om de teller te wijzigen</p>
	<input
		v-model.number="nummer"
		type="number"
		step="1"
		class="form-control-sm"
	/>
	<button
		class="btn btn-secondary mx-2"
		@click="editNumer"
	>
		Wijzig
	</button>
	<div class="p-2">
		<button
			class="btn btn-success mx-1"
			@click="increment"
		>
			+
		</button>
		<button
			class="btn btn-info mx-1"
			@click="decrement"
		>
			-
		</button>
		<button
			class="btn btn-danger mx-1"
			@click="reset"
		>
			Reset
		</button>
	</div>
</template>
<script>
	import { useCounterStore } from "@/stores/counter.js"

	export default {
		data() {
			return {
				store: useCounterStore(),
				nummer: 0,
			}
		},

		created() {
			if (this.nummer === 0) {
				this.store.editNumer(this.nummer++)
				this.store.increment()
			}
		},

		methods: {
			increment() {
				this.store.increment()
			},
			decrement() {
				this.store.decrement()
			},
			reset() {
				this.store.reset()
			},
			editNumer() {
				this.store.editNumer(this.nummer)
			},
		},
		computed: {
			counter() {
				return this.store.counter
			},
		},
	}
</script>
