const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = walk('D:\\IPTV branded\\iptv usa 4k\\src');
files.forEach(file => {
  if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css') || file.endsWith('.json') || file.endsWith('.md')) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replacements
    content = content.replace(/IPTV\s+Fiesta/g, '4K IPTV USA');
    content = content.replace(/IPTV\s+FIESTA/g, '4K IPTV USA');
    content = content.replace(/iptv\s+fiesta/gi, '4k iptv usa');
    content = content.replace(/iptv-fiesta/gi, '4k-iptv-usa');
    content = content.replace(/IPTVFiesta/g, '4KIPTVUSA');
    
    // Specifically handle the component names if any got changed to 4KIPTVUSA
    content = content.replace(/Why4KIPTVUSASection/g, 'Why4KIPTVUSASection');
    
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Updated', file);
    }
  }
});
