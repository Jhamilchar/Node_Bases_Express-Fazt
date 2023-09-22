const { readFile } = require("fs");

function getText(pathFile) {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
}

async function read() {
  try {
    const result = await getText("./data/first.txt");
    const result2 = await getText("./data/second.txt");
    const result3 = await getText("./data/third.txt");
    console.log(result);
    console.log(result2);
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
}

read();
