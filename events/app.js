const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("greet", (arg)=> {
    console.log(`Hello ${arg.username}, You're a ${arg.prof}, right??`);
});

emitter.emit("greet", {username: "Kaka", prof: "Java Dev"});