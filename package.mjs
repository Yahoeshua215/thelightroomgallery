import fs from 'node:fs';
const root = new URL('./', import.meta.url);
const html = fs.readFileSync(new URL('index.html', root), 'utf8');
const image = fs.readFileSync(new URL('in-good-company-poster.png', root));
const uri = `data:image/png;base64,${image.toString('base64')}`;
const standalone = html.replaceAll('href="in-good-company-poster.png"', `href="${uri}"`).replace('src="in-good-company-poster.png"', `src="${uri}"`).replace(' download>', ' download="in-good-company-poster.png">');
fs.writeFileSync(new URL('in-good-company-standalone.html', root), standalone);
console.log('Created standalone HTML with embedded artwork.');
