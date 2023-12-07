import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work

    // TO RUN LOCALLY, the line below should have NO underscore --> `global:({})`
    // TO RUN ON AMPLIFY, the line below shoule have an underscore --> `_global({}) `
    _global:({})
  },
});
