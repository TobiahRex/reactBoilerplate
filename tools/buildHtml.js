import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';  // eslint-disable-line

fs.readFile('src/index.html', (err, markup) => {
  process.stdout.write('\n');
  if (err) {
    return process.stdout.write(`
      ❌  fs.readFile ERROR: ${err}
    `);
  }

  const $ = cheerio.load(markup);

  $('#app').append('<script src="/commons.js" />');

  fs.writeFile('dist/index.html', $.html(), 'utf8', (error) => {
    if (error) {
      return process.stdout.write(`
        ❌  fs.readFile ERROR: ${error}
      `.red.bold);
    }
    return process.stdout.write('\n ✅  index.html written to "/dist"\n'.green.bold);
  });
  return 1;
});
