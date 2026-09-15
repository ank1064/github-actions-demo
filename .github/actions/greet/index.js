const core = require('@actions/core');

const name = core.getInput('name', { required: true });
const message = `Hello from custom action, ${name}!`;

core.info(message);
core.setOutput('message', message);
