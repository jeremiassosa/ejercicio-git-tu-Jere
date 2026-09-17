
function processName(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`.toUpperCase();
  const totalCharacters = fullName.length;

  return `Nombre completo: ${fullName} | ${totalCharacters} Caracteres`;
}

console.log(processName('santiago', 'barua'));
console.log(processName('tobias', 'manquez'));
console.log(processName('jose', 'c. paz'));
console.log(processName('jeremias gabriel', 'sosa maurell'))
