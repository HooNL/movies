<template>
	<p
		class="alert alert-success float-end"
		v-if="userNaam"
	>
		Hallo {{ userNaam }} &hearts; 
	</p>
	<br />
	<AnotherText />
</template>

<script>
	import AnotherText from "@/components/AnotherText.vue"
	export default {
		components: { AnotherText },

		data() {
			return {}
		},
	}
</script>
