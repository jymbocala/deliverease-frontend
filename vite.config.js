import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // enable the test environment with jsdom as the environment
    environment: 'jsdom',
    // setting this to true will enable the test runner to use the same bundler as the application
    globals: true
  }
});
