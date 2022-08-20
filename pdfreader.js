const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('./Top200.pdf');

const main = async () => {
  const pdfReadData = await pdf(dataBuffer)
  console.log(pdfReadData)
}

main()