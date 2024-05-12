const languages = {
  en: require('./lang/en')
};

function validate ( value, validators ) {
  let errors = {};
  let lang = process.env.SAIPH_LANG || 'en';

  validators.forEach(validator => {
    let err = validator.call(this, value);
    if (err)
      errors[err] = languages[lang][err];
  });

  return {
    valid: !errors.length,
    count: Object.keys(errors).length,
    errors
  };
}

module.exports = validate;