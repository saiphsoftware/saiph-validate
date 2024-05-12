function validate ( value ) {
  return value !== void(0) && value !== null ? null : 'required';
}

module.exports = function () {
    return validate;
};