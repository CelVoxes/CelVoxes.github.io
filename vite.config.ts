import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
// import { ssr } from "vite-plugin-ssr/plugin";

export default defineConfig({
	plugins: [react()],
	build: {
		sourcemap: true, // This enables sourcemap generation
	},
	// base: "/", // This tells Vite to use relative paths
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
});
