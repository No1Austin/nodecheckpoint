
// password-generator.js
const generator = require("generate-password");

function makePassword() {
  return generator.generate({
    length: 16,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    strict: true,
  });
}

const pwd = makePassword();
console.log("Generated password:", pwd);
