import { defineConfig } from 'vite'
import ssr from "vite-plugin-ssr/plugin";
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: ["styled-components", "@emotion/*"],
  },
})
