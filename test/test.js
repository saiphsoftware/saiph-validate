const { validEmail, required, minLength } = require('../validators');
const validate = require('..');

let res = validate(null, [
  required(),
  minLength()
], { locale: 'jp' });

console.log(res);

// const locale = require('../locale');
// let ops = { locale: 'en' };
// console.log(locale[ops.locale]['required']);