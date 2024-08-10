<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
		<!-- Logo -->
		<RouterLink
			to="/"
			class="navbar-brand transparent"
			>Movies App</RouterLink
		>
		<!-- Switch Button -->
		<button
			class="navbar-toggler"
			type="button"
			aria-controls="navbarContent"
			data-bs-toggle="collapse"
			data-bs-target="#navbarContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div
			class="collapse navbar-collapse"
			id="navbarContent"
		>
			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<RouterLink
						to="/"
						class="nav-link"
						>Home (opdracht 1)</RouterLink
					>
				</li>
				<li class="nav-item">
					<RouterLink
						to="/about"
						class="nav-link"
						>About (opdracht 2)</RouterLink
					>
				</li>
				<li class="nav-item">
					<RouterLink
						to="/teller"
						class="nav-link"
						>Teller (opdracht 3)</RouterLink
					>
				</li>
				<li class="nav-item">
					<RouterLink
						to="/movies"
						class="nav-link"
						>Movies (opdracht 4)</RouterLink
					>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
	export default {
		name: "Navigation",
		created() {},
		data() {
			return {}
		},
		props: {},
		methods: {},
	}
</script>

<style scoped>
	nav .router-link-exact-active {
		color: #fb923c;
	}
	nav a {
		color: blanchedalmond;
		text-decoration: none;
	}

	.transparent {
		color: white !important;
	}
</style>
