function validate ( reg, value ) {
  if (!value)
    return null;
  return reg.test(value) ? null : 'pattern';
}

module.exports = function ( reg ) {
  if (reg && typeof(reg)==='object' && reg['test'])
    return validate.bind(this, reg);
  else
    throw 'Invalid Regex';
};