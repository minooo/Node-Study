const EventEmitter = require("events");
class CustomEvent extends EventEmitter {}
const ce = new CustomEvent();
ce.on("test", () => {
  console.log("test123");
});
setInterval(() => {
  ce.emit("test");
}, 500);
