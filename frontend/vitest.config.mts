import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: {
  provider: 'v8',
  include: ['src/**/*.{ts,tsx}'],
  exclude: ['**/*.test.{ts,tsx}', '**/index.ts', '**/*.d.ts', 'e2e/**'],
  thresholds: { lines: 70, functions: 70, branches: 70, statements: 70 },
},
  },
});
