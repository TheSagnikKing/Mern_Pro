import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/admin/auth':'http://localhost:8000',
      '/admin/other':'http://localhost:8000'
    }
  },
  plugins: [react()],
})
