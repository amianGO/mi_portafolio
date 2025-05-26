import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'


// https://vite.dev/config/
export default defineConfig({
  base:'/mi_portafolio/',
  plugins: [react(),
    viteStaticCopy({
      targets: [
        {
          src: 'index.html',
          dest: '',
          rename: '404.html'
        }
      ]
    })
  ],
})
