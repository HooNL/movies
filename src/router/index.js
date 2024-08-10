import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import MoviesView from "../views/MoviesView.vue"
import TellerView from "../views/TellerView.vue"
import Movie from "@/components/Movie.vue"
 
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/movies",
			name: "movies",
			component: MoviesView,
		},
		{
			path: "/movies/movie",
			name: "movie",
			component: Movie,
		},
		{
			path: "/teller",
			name: "teller",
			component: TellerView,
		},
		{
			path: "/about",
			name: "about",
			component: () => import("../views/AboutView.vue"),
		},
	],
})

export default router
