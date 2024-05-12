const pattern = require('./pattern');

module.exports = [
  /**
   * phone number pattern. Not great but good enough
   * 
   */
  function () { return pattern(/^[0-9\-() ]{10,20}$/); },
  /**
   * email address pattern
   */
  function () { return pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/); },
  /**
   * relatively safe name characters (non international)
   */
  function () { return pattern(/^[a-zA-Z0-9][a-zA-Z0-9 '\.-]{1,100}$/); },
   /**
   * relatively safe bulk text (non international)
   */
   function () { return pattern(/^[a-zA-Z0-9][a-zA-Z0-9 _!,\'\x22\.\:-\s]+$/); }
];