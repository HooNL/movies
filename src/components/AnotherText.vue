<template>
	<div>
		<p
			class="lead"
			v-show="userNaam"
		>
			Huidige Username <span class="alert alert-info p-1">{{ userNaam }}</span>
		</p>

		<input
			v-model="newUser"
			:placeholder="userNaam + ' => click hier om te wijzigen'"
			type="text"
			class="form-control"
		/>
		<button
			class="btn btn-outline-success mt-2"
			@click="editUser()"
		>
			Update
		</button>
	</div>
</template>

<script>
	import { useWelkomStore } from "@/stores/welkom"

	export default {
		name: "AnotherText",
		data() {
			return {
				store: useWelkomStore(),
				newUser: "",
			}
		},
		methods: {
			editUser() {
				this.store.editUser(this.newUser)
			},
			/* 
			wisName() {
				return this.store.wisName()
			}, */
		},
	}
</script>

<style scoped></style>
