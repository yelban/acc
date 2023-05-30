/* eslint-disable import/no-extraneous-dependencies */

import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
// import fs from "fs";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    // process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return {
        plugins: [vue()],
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
        },
        // server: {
        //     https: {
        //         key: fs.readFileSync(process.env.VITE_HTTPS_KEY),
        //         cert: fs.readFileSync(process.env.VITE_HTTPS_CERT),
        //     },
        // },
    };
});
