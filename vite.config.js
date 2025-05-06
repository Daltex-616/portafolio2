import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  
  // Añade estas configuraciones clave:
  base: '/', // Crucial para rutas absolutas en producción
  build: {
    outDir: 'dist', // Carpeta de salida (asegúrate que Nginx apunte aquí)
    assetsDir: 'assets', // Directorio de assets (JS/CSS)
    emptyOutDir: true, // Limpia el directorio en cada build
    rollupOptions: {
      output: {
        // Genera nombres de archivo predecibles (opcional pero útil)
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`
      }
    }
  },
  server: {
    // Configuración para desarrollo (opcional)
    host: true,
    port: 3000
  }
});