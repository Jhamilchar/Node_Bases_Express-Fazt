const fs = require('fs')

// const first = fs.readFileSync("./data/first.txt", "utf-8");
// const second = fs.readFileSync("./data/second.txt");

// console.log(first);
// console.log(second.toString());

// const titfleFive = 'Contenido de el quinto :v'

// fs.writeFileSync("./data/five.txt", titfleFive);

// const title = 'este se a;adio'

// fs.writeFileSync(`./data/four.txt`, title, {
//     flag: 'a'
// })

// console.log(titfleFive);

fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
    if (error) {
            console.log(error);
    }
    console.log(data);

    fs.readFile("./data/second.txt", "utf-8", (error, data) => {
      if (error) {
        console.log(error);
      }
      console.log(data);

        fs.writeFile('./data/newfile.txt', 'Archivo creado desde fs', (err, data) => {
            console.log(err);
            console.log(data);
        })
    });
})

