const esbuild = require('esbuild')
const assetsManifest = require('esbuild-plugin-assets-manifest')
const postCssPlugin = require('esbuild-style-plugin')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const utils = require('./utils')

const bundleDir = utils.resolvePath('../public/bundles')

const options = {
  bundle: true,
  minifyWhitespace: true,
  sourcemap: true,
  target: 'esnext',
  platform: 'browser',
  format: 'esm',
  metafile: true,
  outdir: bundleDir,
  entryPoints: {
    videos: './src/apps/videos/index.tsx',
    main: './src/styles/main.css',
    locales_en: './src/locales/en.js'
  },
  assetNames: '[dir]/[name]',
  loader: {
    '.svg': 'file',
    '.png': 'dataurl'
  },
  plugins: [
    assetsManifest({
      filename: 'asset-manifest.json',
      path: utils.resolvePath('../public/bundles'),
      metadata: { timestamp: new Date(), module: 'rp', type: 'esm' },
      processOutput(assets) {
        return JSON.stringify(assets, null, '  ')
      }
    }),
    postCssPlugin({
      postcss: {
        plugins: [tailwindcss, autoprefixer]
      }
    })
  ]
}

const builds = {
  dev: () => ({
    ...options,
    watch: true
  }),
  bundle: () => ({
    ...options
  }),
  'bundle-prod': () => ({
    ...options,
    entryNames: '[name]-[hash]',
    assetNames: 'assets/[dir]/[name]-[hash]'
  })
}

const target = builds[process.argv[2]]()
esbuild.build(target)
