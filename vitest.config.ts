import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    include: ['test/**/*.{spec,test}.{js,ts}', 'app/**/*.{spec,test}.{js,ts}'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html'],
    },
  },
})
