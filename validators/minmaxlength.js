function validateMin ( min, value ) {
  if (value === void(0) || value === null)
    return null;
  if (typeof(value) !== 'string')
    throw 'Value Not A String';
  return value.length < min ? 'minlength' : null;
}

function validateMax ( max, value ) {
  if (value === void(0) || value === null)
    return null;
  if (typeof(value) !== 'string')
    throw 'Value Not A String';
  return value.length > max ? 'maxlength' : null;
}

module.exports = [
  function ( min ) { return validateMin.bind(this, min); },
  function ( max ) { return validateMax.bind(this, max); }
];