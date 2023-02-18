import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

var usePassword = function usePassword(_ref) {
  var _ref$password = _ref.password,
    password = _ref$password === void 0 ? '' : _ref$password,
    _ref$confirmPassword = _ref.confirmPassword,
    confirmPassword = _ref$confirmPassword === void 0 ? '' : _ref$confirmPassword,
    _ref$min = _ref.min,
    min = _ref$min === void 0 ? 10 : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? 30 : _ref$max;
  var _useState = useState({
      hasLowerCase: false,
      hasUpperCase: false,
      hasDigit: false,
      hasSpecialChar: false,
      isMatch: false,
      hasValidLength: false
    }),
    isValidPassword = _useState[0],
    setIsValidPassword = _useState[1];
  useEffect(function () {
    var hasLowerCase = /[a-z]/.test(password);
    var hasUpperCase = /[A-Z]/.test(password);
    var hasDigit = /[0-9]/.test(password);
    var hasSpecialChar = /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(password);
    var hasValidLength = password.length >= min && password.length <= max;
    var isMatch = password && password === confirmPassword;
    setIsValidPassword({
      hasLowerCase: hasLowerCase,
      hasUpperCase: hasUpperCase,
      hasDigit: hasDigit,
      hasSpecialChar: hasSpecialChar,
      hasValidLength: hasValidLength,
      isMatch: isMatch
    });
  }, [password, confirmPassword, min, max]);
  var hasLowerCase = isValidPassword.hasLowerCase,
    hasUpperCase = isValidPassword.hasUpperCase,
    hasDigit = isValidPassword.hasDigit,
    hasSpecialChar = isValidPassword.hasSpecialChar,
    hasValidLength = isValidPassword.hasValidLength,
    isMatch = isValidPassword.isMatch;
  return [hasDigit, hasSpecialChar, isMatch, hasUpperCase, hasValidLength, hasLowerCase];
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var text = {
  fontSize: '0.75rem',
  lineHeight: '1rem'
};
var valid_line = _extends({}, text, {
  textDecoration: 'line-through'
});
var noValid_line = _extends({}, text);
var valid_color = _extends({}, text, {
  color: 'green'
});
var noValid_color = _extends({}, text, {
  color: 'red'
});
var show = {
  opacity: 1,
  height: 'auto',
  display: 'block'
};
var hide = {
  opacity: 0,
  height: 0
};

var Match = function Match(_ref) {
  var password = _ref.password,
    confirmPassword = _ref.confirmPassword,
    isActive = _ref.isActive,
    _ref$display = _ref.display,
    display = _ref$display === void 0 ? "color" : _ref$display;
  var _usePassword = usePassword({
      password: password,
      confirmPassword: confirmPassword
    }),
    isMatch = _usePassword[2];
  return /*#__PURE__*/React.createElement(motion.div, {
    initial: false,
    animate: isActive ? show : hide,
    transition: {
      duration: 0.5
    }
  }, isMatch ? /*#__PURE__*/React.createElement("p", {
    style: display === 'color' ? valid_color : valid_line
  }, "password match") : /*#__PURE__*/React.createElement("p", {
    style: display === 'color' ? noValid_color : noValid_line
  }, "password not matched"));
};

var Rules = function Rules(_ref) {
  var password = _ref.password,
    min = _ref.min,
    max = _ref.max,
    lower = _ref.lower,
    upper = _ref.upper,
    digits = _ref.digits,
    specialCharacter = _ref.specialCharacter,
    isActive = _ref.isActive,
    _ref$display = _ref.display,
    display = _ref$display === void 0 ? "color" : _ref$display;
  var _usePassword = usePassword({
      password: password,
      min: min,
      max: max
    }),
    hasDigit = _usePassword[0],
    hasSpecialChar = _usePassword[1],
    hasUpperCase = _usePassword[3],
    hasValidLength = _usePassword[4],
    hasLowerCase = _usePassword[5];
  return /*#__PURE__*/React.createElement(motion.div, {
    initial: false,
    animate: isActive ? show : hide,
    transition: {
      duration: 0.5
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none'
    }
  }, hasValidLength ? /*#__PURE__*/React.createElement("li", {
    style: display === 'color' ? valid_color : valid_line
  }, "between ", min, " and ", max, " character long") : /*#__PURE__*/React.createElement("li", {
    style: display === 'color' ? noValid_color : noValid_line
  }, "between ", min, " and ", max, " character long"), upper && /*#__PURE__*/React.createElement("div", null, hasUpperCase ? /*#__PURE__*/React.createElement("li", {
    style: display === 'color' ? valid_color : valid_line
  }, ' ', "uppercase character") : /*#__PURE__*/React.createElement("li", {
    style: display === 'color' ? noValid_color : noValid_line
  }, "uppercase character")), lower && /*#__PURE__*/React.createElement("div", null, hasLowerCase ? /*#__PURE__*/React.createElement("li", {
    style: display === 'color' ? valid_color : valid_line
  }, "lowercase character") : /*#__PURE__*/React.createElement("li", {
    style: display === 'color' ? noValid_color : noValid_line
  }, "lowercase character")), digits && /*#__PURE__*/React.createElement("div", null, hasDigit ? /*#__PURE__*/React.createElement("li", {
    style: display === 'color' ? valid_color : valid_line
  }, "1 digit") : /*#__PURE__*/React.createElement("li", {
    style: display === 'color' ? noValid_color : noValid_line
  }, "1 digit")), specialCharacter && /*#__PURE__*/React.createElement("div", null, hasSpecialChar ? /*#__PURE__*/React.createElement("li", {
    style: display === 'color' ? valid_color : valid_line
  }, "1 special character") : /*#__PURE__*/React.createElement("li", {
    style: display === 'color' ? noValid_color : noValid_line
  }, "1 special character"))));
};

export { Match, Rules, usePassword };
//# sourceMappingURL=index.modern.js.map
