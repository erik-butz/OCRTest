const tesseract = require("node-tesseract-ocr")
const fs = require('fs');

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}

const main = async () => {
  const res = await tesseract.recognize("Top200Part1.jpg", config)
    .catch((error) => {
      console.log(error.message)
    })
  fs.appendFile('scannedimage.txt', res, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("scannedimage.txt", "utf8"));
    }
  })

  console.log(res)
}

main()
