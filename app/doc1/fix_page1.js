const fs = require('fs');
const path = require('path');

const file = path.join('c:/Users/prata/Downloads/components1/components/app/doc1', 'page1/page.tsx');
let content = fs.readFileSync(file, 'utf8');

// Ensure tables have fixed layout and 100% width
content = content.replace(/<table className="([^"]+)"/g, (match, classes) => {
  let newClasses = classes.replace('table-fixed', '').replace('w-full', '') + ' w-full table-fixed text-[10px] sm:text-xs leading-tight';
  return `<table className="${newClasses}" style={{ tableLayout: 'fixed', width: '100%', wordBreak: 'break-word', wordWrap: 'break-word' }}`;
});

// Ensure cells allow breaking and have minimal padding
content = content.replace(/<t([dh]) className="([^"]+)"/g, (match, tag, classes) => {
  let newClasses = classes + ' whitespace-normal break-all p-1';
  return `<t${tag} className="${newClasses}"`;
});

fs.writeFileSync(file, content);
console.log('Fixed page1 tables');
