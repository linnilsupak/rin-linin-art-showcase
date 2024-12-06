const { createWriteStream, readFile } = require('fs');
const { SitemapStream } = require('sitemap');

async function run() {
  // Creates a sitemap object given the input configuration with URLs
  const sitemap = new SitemapStream({ hostname: 'https://rin-linin-art-showcase.vercel.app/' });
  const writeStream = createWriteStream('./dist/rin-linin-art-showcase/browser/sitemap.xml');


  await readFile('./src/app/app.routes.ts', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    sitemap.pipe(writeStream);
    const routeString = data.split('= ')[1].replace('[', '').replace(']', '').replace(';', '');
    const routes = [...routeString.matchAll(/path: '(.*)'/g)];
    routes.forEach(route => {
      const url = route[1];
      if (url !== '**' && !url.includes('/:')) {
        // console.log(url)
        sitemap.write({ url: '/' + url , changefreq: 'weekly', priority: 0.8 });
      }
    });
    sitemap.end();
  });

}

run();
