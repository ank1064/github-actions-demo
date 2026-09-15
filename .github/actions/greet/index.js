const fs = require('fs');

const name = process.env.INPUT_NAME;
if (!name) {
  console.error('Input "name" is required');
  process.exit(1);
}

const message = `Hello from custom action, ${name}!`;
console.log(message);
fs.appendFileSync(process.env.GITHUB_OUTPUT, `message=${message}\n`);
