const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on('response', (data, secondDAta) =>{
    console.log('received');
    console.log(data);
    console.log(secondDAta);
})

customEmitter.emit("response", "Hello Fazt", ['Pruebas', true, 123]);