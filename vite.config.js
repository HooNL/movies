import { fileURLToPath, URL } from "node:url"
// import { resolve } from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { dir } from 'node:console'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
		
	},
	
  
  // Bootstrap Config
	// root: resolve(__dirname, "src"),
	build: {
		outDir: "./movies/",
	},
	// server: {
	// 	port: 8080,
  // },
  optimizeDeps: {
    entries: [],
}
})
