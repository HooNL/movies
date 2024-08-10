import IconLike from "@/components/icons/IconLike.vue"
import Navigation from "@/components/Navigation.vue"
import IconDislike from "@/components/icons/IconDislike.vue"
import IconStarSolid from "@/components/icons/IconStarSolid.vue"
import IconStarRegular from "@/components/icons/IconStarRegular.vue"
import { useMoviesStore } from "@/stores/movies.js"
import { useWelkomStore } from "@/stores/welkom"
export default {
	data() {
		return {
			naam: "Hooman",
			store: useMoviesStore(),
			storeWelkom: useWelkomStore(),
		}
	},
	components: {
		Navigation,
		IconLike,
		IconDislike,
		IconStarRegular,
		IconStarSolid,
	},
	methods: {
		imgUrl(url) {
			return new URL(url, import.meta.url).href
		},
	},
	computed: {
		userNaam() {
			return this.storeWelkom.userNaam
		},
		newNaam() {
			return this.storeWelkom.newNaam
		},
		users ()
		{
			return this.storeWelkom.users
		}
	},
}
