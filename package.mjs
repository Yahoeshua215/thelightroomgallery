import fs from 'node:fs';
const root = new URL('./', import.meta.url);
const html = fs.readFileSync(new URL('index.html', root), 'utf8');
const dataUri = (filename) => {
  const image = fs.readFileSync(new URL(filename, root));
  return `data:image/png;base64,${image.toString('base64')}`;
};
const poster = dataUri('in-good-company-poster.png');
const logo = dataUri('lightroom-gallery-logo-v2.png');
const standalone = html.replaceAll('href="in-good-company-poster.png"', `href="${poster}"`).replace('src="in-good-company-poster.png"', `src="${poster}"`).replace('src="lightroom-gallery-logo-v2.png"', `src="${logo}"`).replace(' download>', ' download="in-good-company-poster.png">');
fs.writeFileSync(new URL('in-good-company-standalone.html', root), standalone);
console.log('Created standalone HTML with embedded artwork.');
