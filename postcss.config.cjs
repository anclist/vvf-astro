const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

// Vite runs every CSS file it handles through this config, including
// pre-built vendor CSS pulled in from node_modules (e.g. EmDash's admin UI,
// which ships its own compiled Tailwind v4 output). Running that already-
// compiled CSS back through our project's Tailwind v3 plugin breaks on its
// `@layer` at-rules ("no matching @tailwind base directive"), so this skips
// our Tailwind/Autoprefixer plugins for anything under node_modules while
// leaving them fully active for our own source.
//
// Different plugins need different wrapping: tailwindcss exposes itself as
// a legacy `{ postcssPlugin, plugins: [fn] }` container of plain
// (root, result) => {} functions, while autoprefixer uses the modern
// PostCSS 8 `prepare(result)` API. Both forms are handled below.
function skipForVendorCss(plugin) {
  const isVendorFile = (root) => {
    const from = root?.source?.input?.file
    return Boolean(from && from.includes('node_modules'))
  }

  if (Array.isArray(plugin.plugins)) {
    return {
      postcssPlugin: plugin.postcssPlugin,
      plugins: plugin.plugins.map((fn) => (root, result) => {
        if (isVendorFile(root)) return
        return fn(root, result)
      }),
    }
  }

  return {
    postcssPlugin: plugin.postcssPlugin,
    prepare(result) {
      if (isVendorFile(result.root)) return {}
      return typeof plugin.prepare === 'function' ? plugin.prepare(result) : plugin
    },
  }
}

module.exports = {
  plugins: [skipForVendorCss(tailwindcss()), skipForVendorCss(autoprefixer())],
}
