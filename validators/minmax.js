function validateMin ( min, value ) {
  if (value === void(0) || value === null)
    return null;
  if (isNaN(value))
    throw 'Value NaN';
  return value < min ? 'min' : null;
}

function validateMax ( max, value ) {
  if (value === void(0) || value === null)
    return null;
  if (isNaN(value))
    throw 'Value NaN';
  return value > max ? 'max' : null;
}

module.exports = [
  function ( min ) { return validateMin.bind(this, min); },
  function ( max ) { return validateMax.bind(this, max); }
];