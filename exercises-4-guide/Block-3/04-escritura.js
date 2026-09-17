const fs = require('node:fs');

const fileName = 'exercises-4-guide/Block-3/saludo.txt';
const fileContent = 'Guardando mi primer archivo con Node.js';

try {
  fs.writeFileSync(fileName, fileContent, 'utf-8');
  console.log(`File "${fileName}" created successfully!`);
} catch (error) {
  console.error('Error writing the file:', error);
}
