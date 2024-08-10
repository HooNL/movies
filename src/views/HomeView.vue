<template>
	<div class="bg-info text-center p-4">
		<h1>Welkom</h1>

		<input
			class="form-control"
			type="text"
			name=""
			id=""
			placeholder="Voer uw naam in"
			v-model="user"
		/>
		<br />
		<button
			class="btn btn-outline-success"
			@click="getName()"
		>
			Save
		</button>

		<p
			class="lead bg-success p-2 text-light mt-2"
			v-if="userNaam"
		>
			Welkom {{ userNaam }} in onze app
		</p>
		<!-- <h3
			v-for="(user, id) in users"
			:key="id"
		>
			{{ user }}
		
		</h3> -->
	</div>

	<hr />
</template>
<script>
	import { useWelkomStore } from "@/stores/welkom"
	export default {
		components: {},
		data() {
			return {
				store: useWelkomStore(),
				user: "",
			}
		},
		methods: {
			// this.store.showUsers()
			getName() {
				this.store.showName(this.user)
				this.user = ""
			},

			wisName() {
				return this.store.wisName()
			},
		},
	}
</script>
