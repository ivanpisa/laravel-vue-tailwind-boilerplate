import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler",
        },
    },
    plugins: [laravel(["resources/js/app.js"]), vue()],
});
