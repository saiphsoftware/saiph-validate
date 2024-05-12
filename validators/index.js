const pattern = require('./pattern');
const required = require('./required');
const [mininum, maximum] = require('./minmax');
const [minLength, maxLength] = require('./minmaxlength');

const [
  validPhone,
  validEmail,
  validName,
  validText
] = require('./commonpattern');

module.exports = {
  pattern,
  required,
  mininum,
  maximum,
  minLength,
  maxLength,
  validPhone,
  validEmail,
  validName,
  validText
};