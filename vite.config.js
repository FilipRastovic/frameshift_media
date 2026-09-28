import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Served from the frameshift.rs custom domain root (see public/CNAME),
  // not from a /frameshift_media/ subpath.
  base: '/',
  plugins: [react()],
})
