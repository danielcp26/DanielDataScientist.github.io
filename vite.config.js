import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/DanielDataScientist.github.io/', // <-- If deploying to username.github.io/REPO_NAME, replace this. For user/organization site, change to '/'
})
