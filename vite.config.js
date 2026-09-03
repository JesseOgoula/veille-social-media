import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'mirror-dist-to-docs',
      closeBundle() {
        // Automatically mirror the dist build to docs folder so both Vercel (dist) and GitHub Pages (docs) are always updated
        const srcDir = path.resolve(__dirname, 'dist')
        const destDir = path.resolve(__dirname, 'docs')
        if (fs.existsSync(srcDir)) {
          fs.cpSync(srcDir, destDir, { recursive: true })
          console.log('✓ Build synchronisé automatiquement de dist/ vers docs/ !')
        }
      }
    }
  ],
  base: './', // Relative base path ensures assets load properly on both Vercel (/) and GitHub Pages (/veille-social-media/)
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
