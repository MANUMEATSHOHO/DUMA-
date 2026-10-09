// Копирует шрифты из npm-пакетов @fontsource в app/fonts (замена get-fonts.sh)
const fs = require('fs'), path = require('path');
const out = path.join(__dirname, '..', 'app', 'fonts');
const nm = path.join(__dirname, '..', 'node_modules', '@fontsource');
fs.mkdirSync(out, { recursive: true });
const jobs = [
  ['ibm-plex-sans', ['cyrillic', 'latin'], [400, 500, 600]],
  ['rubik-mono-one', ['cyrillic', 'latin'], [400]]
];
let n = 0;
for (const [pkg, subs, ws] of jobs) {
  for (const s of subs) for (const w of ws) {
    const f = `${pkg}-${s}-${w}-normal.woff2`;
    fs.copyFileSync(path.join(nm, pkg, 'files', f), path.join(out, f)); n++;
  }
  const lic = path.join(nm, pkg, 'LICENSE');
  if (fs.existsSync(lic)) fs.copyFileSync(lic, path.join(out, `LICENSE-${pkg}.txt`));
}
console.log(`Шрифтов скопировано: ${n}`);
