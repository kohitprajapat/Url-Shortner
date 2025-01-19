const fs = require('fs');
const EventEmitter = require('events');

const emitter = new EventEmitter();

let logs = {
  "user-login": 0,
  "user-purchase": 0,
  "user-update": 0,
  "user-logout": 0
};

try {
  const data = fs.readFileSync('summary.json', 'utf-8');
  logs = JSON.parse(data);
} catch (err) {
  if (err.code !== 'ENOENT') {
    console.error('Error reading logs:', err);
  }
}

emitter.on("user-login", (username) => {
    console.log(`${username}, Logged in!!!`);
    logs["user-login"]++;
});

emitter.on("user-purchase", (arg) => {
    console.log(`${arg.username}, Purchased a ${arg.product}!!!`);
    logs["user-purchase"]++;
});

emitter.on("user-update", (arg) => {
    console.log(`${arg.username}, updated it's ${arg.update}!!!`);
    logs["user-update"]++;
});

emitter.on("user-logout", (username) => {
    console.log(`${username}, Logged Out!!!`);
    logs["user-logout"]++;
});

emitter.on("summary", () => {
    console.log(logs);
    fs.writeFileSync('summary.json', JSON.stringify(logs));
});

emitter.emit("user-login", "Kaka");
emitter.emit("user-purchase", {username: "Kaka", product: "Laptop"});
emitter.emit("user-update", {username: "Kaka",update: "email"});
emitter.emit("user-logout", "Kaka");
emitter.emit("summary");