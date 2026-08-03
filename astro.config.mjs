import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [svelte(), mdx(), react()],
    vite: {
        plugins: [tailwindcss()],
    },
});
