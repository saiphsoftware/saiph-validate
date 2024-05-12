const { validEmail, required, minLength } = require('../validators');
const validate = require('..');

let res = validate(null, [
  required(),
  minLength()
]);

console.log(res);