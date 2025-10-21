
const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", "utf8", (err) => {
  if (err) return console.error(err);
  console.log('Created "welcome.txt" with content: Hello Node');
});
