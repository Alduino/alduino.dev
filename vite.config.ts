import vike from "vike/plugin";
import react from "@vitejs/plugin-react-swc";
import {vanillaExtractPlugin} from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react(), vike(), vanillaExtractPlugin()]
});
