import { defineConfig } from 'astro/config';


import icon from 'astro-icon';




import purgecss from 'astro-purgecss';




// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'assets/images',
    inlineStylesheets: 'never',
    format: 'file',
    site: "https://ryn-e-commerce.com/",
    base: '/',
    // assetsPrefix: './'
  },

  image: {
    // service: squooshImageService(),
    domains: ["astro.build"]
  },

  compressHTML: true,
  optimizeHoistedScript: true,
  output: 'static',

  //   integrations: [purgecss(), icon()]
  vite: {
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: ({
            name
          }) => {
            // Check if the file is an image
            if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
              // Extract the folder structure relative to 'src/assets/images/'
              const match = name.match(/src\/assets\/images\/(.+)/);
              if (match && match[1]) {
                // Preserve subfolders and filename
                return `assets/images/${match[1]}`;
              }

              // Default case: if no subfolders, just use the file name
              return 'assets/images/[name]-[hash][extname]';
            }
            if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';
            }

            // default value
            // ref: https://rollupjs.org/guide/en/#outputassetfilenames
            return 'assets/[name]-[hash][extname]';
          }
        }
      }
    }

  },

  integrations: [purgecss({ safelist: ['svg', 'swiper-horizontal','swiper-pagination-clickable ','swiper-rtl','swiper-pagination-horizontal','swiper-pagination-bullets', 'swiper-button-next', 'swiper-button-prev', ' swiper-pagination-bullet', 'swiper-pagination-bullet-active', 'swiper-pagination' , 'swiper-pagination-horizontal' , 'swiper-pagination-bullets' , 'swiper-pagination-bullets' ,'span'] }), icon()]
});
// safelist