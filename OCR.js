const tesseract = require("node-tesseract-ocr")
const fs = require('fs');
const removeEmptyLines = require("remove-blank-lines");

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}

const main = async () => {
  for (let i = 1; i <= 6; i++) {
    const res = await tesseract.recognize(`Top200Part${i}.jpg`, config)
      .catch((error) => {
        console.log(error.message)
      })
    fs.appendFile('scannedimage.txt', res, (err) => {
      if (err)
        console.log(err);
    })
  }
  const data = fs.readFileSync('scannedimage.txt', (err) => {
    if (err)
      console.log(err)
  })
  let newValue = data.toString().replace(/\r\n\r\n/g, '\r\n')
  console.log(newValue)
  console.log('Successfully removed all blanks')
  fs.writeFileSync('TrimmedPlayers.txt', newValue)
}

main()
