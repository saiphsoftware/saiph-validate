# Saiph Software Validate
A simple, inelegant input validation library to streamline projects

## Usage
Call *validate* method on every value that want to validate, passing the desired validator functions
e.g.
```
//import validate from '@saiphsoft/validate';
//import { required } from '@saiphsoft/validate/validators';
const validate = require('@saiphsoft/validate');
const { required } = require('@saiphsoft/validate/validators');

const valueShouldHaveValue;

const res = validate(valueShouldHaveValue, [
  required()
]);
console.log(res);
```

will result in
```
{ valid: true, count: 1, errors: { required: 'Value is required.' } }
```

- Simply check if value is valid
```
if (!validate(name, [ required() ]).valid)
  console.log('Name is required but was not supplied.');
```

- Check specific error
```
//import { required, minLength } from '@saiphsoft/validate/validators';
const { required, minLength } = require('@saiphsoft/validate/validators');

function showError ( key, result ) {
  if (result.required)
    console.log(key + ' was not supplied');
  if (result.minLength)
    console.log(key + ' does not meet minimum length');
}

const name1 = 'bob';
const name2 = null;

const res1 = validate(name1, [
  required(),
  minLength(10)
]);
const res2 = validate(name2, [
  required(),
  minLength(10)
]);

showError('name 1', res1);
showError('name 2', res2);
```

```
name 1 does not meet minimum length
name 2 was not supplied
```

## Validators

|Validator|Description|Error Key|
|---------|-----------|---------|
|required|value must not be null or void(0)|required|
|minimum|mininum numeric value|min|
|maximum|maximum numeric value|max|
|minLength|mininum string length|minlength|
|maxLength|maximum string length|maxlength|
|pattern|Regex validation|pattern|

### Common Pattern Validators
These all return the *pattern* error key.

Phone number /^[0-9\\-() ]{10,20}$/

Email address ^\[a-z0-9._%+-]+@\[a-z0-9.-]+\\.\[a-z]{2,4}$

```
//import { validPhone, validEmail } from '@saiphsoft/validate/validators';
const { validPhone, validEmail } = require('@saiphsoft/validate/validators');

let phoneRes = validate('111-222-3333', [validPhone()]);
let emailRes = validate('bob@bob.com', [validEmail()]);
```