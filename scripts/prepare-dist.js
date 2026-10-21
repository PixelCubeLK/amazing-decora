const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
fs.mkdirSync(output, { recursive: true });

// Explicit deployment allowlist: never publish dependencies or project settings.
for (const entry of ['index.html', 'animations.css', 'script.js', 'robots.txt', 'sitemap.xml', 'pages', 'components', 'images']) {
  fs.cpSync(path.join(root, entry), path.join(output, entry), { recursive: true });
}
fs.mkdirSync(path.join(output, 'styles'), { recursive: true });
fs.copyFileSync(path.join(root, 'styles/site.css'), path.join(output, 'styles/site.css'));
console.log('Prepared static website in dist/ (no node_modules or build tools).');
