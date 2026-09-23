const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/prata/Downloads/components1/components/app/doc1';
const pages = ['page1/page.tsx', 'page2/page.tsx', 'page3/page.tsx', 'page4/page.tsx', 'page5/page.tsx'];

pages.forEach(p => {
  const file = path.join(dir, p);
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace table tag to add table-fixed, break-words, and smaller text
  content = content.replace(/<table className="([^"]+)"/g, (match, classes) => {
    let newClasses = classes;
    // Remove conflicting classes if any
    newClasses = newClasses.replace('text-sm', '').replace('text-xs', '');
    
    // Add fixing classes
    if (!newClasses.includes('table-fixed')) {
      newClasses += ' table-fixed text-[11px] leading-tight break-words';
    }
    
    return `<table className="${newClasses.trim()}"`;
  });

  // Ensure td/th are break-word
  content = content.replace(/<t([dh]) className="([^"]+)"/g, (match, tag, classes) => {
    let newClasses = classes;
    if (!newClasses.includes('break-words')) {
      newClasses += ' break-words hyphens-auto';
    }
    // Also change padding to be smaller
    newClasses = newClasses.replace('p-2', 'p-1');
    return `<t${tag} className="${newClasses}"`;
  });

  // Save it back
  fs.writeFileSync(file, content);
});

console.log('Tables fixed!');
