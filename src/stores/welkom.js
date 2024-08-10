import { defineStore } from "pinia"

export const useWelkomStore = defineStore("welkom", {
	state: () => {
		return {
			userNaam: "",
			users: [],
			newNaam: "",
		}
	},

	actions: {
		showName(user) {
			this.userNaam = user
		},
		// showUsers() {
		// 	this.users.unshift(this.userNaam)
		// },
		editUser(user) {
			this.userNaam = user
		},
		wisName() {
			this.userNaam = ""
		},
	},
})
