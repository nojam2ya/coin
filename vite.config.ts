import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// export default defineConfig({
//   plugins: [react(), tsconfigPaths()],
//   resolve: {
//     alias: [
//       { find: '@src', replacement: resolve(__dirname, 'src') },
//       { find: '@style', replacement: resolve(__dirname, 'src/style') },
//       { find: '@routes', replacement: resolve(__dirname, 'src/routes') },
//       {
//         find: '@components',
//         replacement: resolve(__dirname, 'src/components'),
//       },
//     ],
//   },
//   base: '/coin/',
// });
export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    resolve: {
      alias: [
        { find: '@src', replacement: resolve(__dirname, 'src') },
        { find: '@style', replacement: resolve(__dirname, 'src/style') },
        { find: '@routes', replacement: resolve(__dirname, 'src/routes') },
        {
          find: '@components',
          replacement: resolve(__dirname, 'src/components'),
        },
      ],
    },
    // base: '/coin/',
    base: env.VITE_BASE_URL,
  });
};
