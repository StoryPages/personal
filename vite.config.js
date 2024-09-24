import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import DEFAULT_OPTIONS from './imageOptimizerOptions';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';

export default defineConfig({
     plugins: [
          createHtmlPlugin({
               minify: true,
          }),
          ViteImageOptimizer(DEFAULT_OPTIONS),

          VitePluginSvgSpritemap('public/svg/**/*.svg', {
               svgSpriteConfig: {
                    shape: {
                         transform: ['svgo'],
                    },
               },
               svgConfig: require('./svgo.config'),
          }),

          viteStaticCopy({
               targets: [
                    {
                         src: 'public/images/*',
                         dest: 'images',
                    },
               ],
          }),
          ViteEjsPlugin(),
     ],

     server: {
          host: '0.0.0.0',
          port: 3000,
          watch: {
               paths: ['views/**/*.ejs'],
          },
          hmr: {
               overlay: false,
          },
          browser: 'google-chrome',
     },

     build: {
          outDir: 'dist',
          assetsDir: 'assets',
          rollupOptions: {
               output: {
                    assetFileNames: (assetInfo) => {
                         if (assetInfo.name.endsWith('.svg')) {
                              return 'assets/svg/[name]-[hash][extname]';
                         }
                         return 'assets/[name]-[hash][extname]';
                    },
               },
          },
     },
});
