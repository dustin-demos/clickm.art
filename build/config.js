
const development = process.env.NODE_ENV === 'development'
const production = process.env.NODE_ENV === 'production'

const year = new Date().getFullYear()

const common = {
  bundle: true,
  nodePaths: ['src', 'src/modules'],
  write: false,
  // - - - JSX - - -
  inject: ['./node_modules/superstatic/src/jsx-shim.js'],
  jsxFactory: 'jsx',
  loader: {
    '.js': 'jsx'
  },
  // - - - ENV - - -
  define: {
    'process.env.DEV': development,
    'process.env.PROD': production,
    'process.env.YEAR': year,

    'APP_DEV': development,
    'APP_PROD': production,
    'APP_YEAR': year
  }
}

exports.esbuild = {
  js: {
    ...common,
    entryPoints: ['src/app.js'],
    sourcemap: true,
    define: {
      ...common.define,
      // 'FF_QUIET': false,
      // 'FF_ROUTE_EVENTS': true,
      // 'FF_ROUTE_MIDDLEWARE': false,
      // 'FF_ROUTE_REWRITES': true,
      'process.env.FF_STATIC_RENDER': false
    }
  },
  html: {
    ...common,
    platform: 'node',
    define: {
      ...common.define,
      'process.env.FF_STATIC_RENDER': true
    }
  }
}

exports.typescript = {
  compilerOptions: {
    allowJs: true,
    lib: ['DOM', 'ES2015'],
    target: 'ES5'
  }
}

exports.uglify = {
  toplevel: true,
  compress: {
    drop_console: true,
    passes: 3
  },
  mangle: {
    toplevel: true
  }
}

exports.sass = {
  includePaths: ['node_modules'],
  sourceMap: process.cwd() + '/src',
  sourceMapContents: true,
  sourceMapEmbed: true
}

exports.cleancss = {
  level: 2
}
