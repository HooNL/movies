// import { ref, computed } from 'vue'
import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
	state: () => {
		return {
			counter: 0,
		}
	},
	actions: {
		increment() {
			this.counter++
		},
		decrement() {
			this.counter--
		},
		reset() {
			this.counter = 0
		},
		editNumer(numer) {
			this.counter = numer
		},
	},
	getters: {},
})

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
