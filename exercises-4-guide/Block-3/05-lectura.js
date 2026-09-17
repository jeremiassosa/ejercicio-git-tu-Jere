// Importamos el módulo nativo de Node.js para manejo de archivos
const fs = require('node:fs');
const fileName = 'exercises-4-guide/Block-3/saludo.txt';

try {
  const content = fs.readFileSync(fileName, 'utf-8');
  const characterCount = content.length;

  console.log(`Content: ${content} | ${characterCount} Characters`);
} catch (error) {
  console.error(`Error find to "${fileName}"`, error.message);
}
