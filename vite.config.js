import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.geojson'],
  json: {
    stringify: true,
  }
});
