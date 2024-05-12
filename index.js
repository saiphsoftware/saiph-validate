const locale = require('./locale');

function validate ( value, validators, options ) {
  // resulting errors
  let errors = {};

  // options
  let _ops = { locale: 'en' };
  if (options)
    Object.assign(_ops, options);
  
  // get language
  const lang = locale[_ops.locale] || locale['en'];

  // run validators
  validators.forEach(validator => {
    let err = validator.call(this, value);
    if (err)
      errors[err] = lang[err];
  });

  const count = Object.keys(errors).length;
  return {
    valid: !count,
    count,
    errors
  };
}

module.exports = validate;