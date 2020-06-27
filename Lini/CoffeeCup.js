function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCoffeeCup({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCoffeeCup';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.904 2.056l-.177-.707C15.538.593 14.779 0 13.999 0h-8c-.78 0-1.538.593-1.728 1.349l-.177.707A1.503 1.503 0 002.998 3.5v1c0 .663.432 1.226 1.029 1.424l.901 12.614A1.6 1.6 0 006.498 20h7a1.6 1.6 0 001.57-1.462l.901-12.614A1.502 1.502 0 0016.998 4.5v-1c0-.687-.464-1.267-1.096-1.444zM6 1h8c.319 0 .68.282.757.591l.102.409H5.14l.102-.409C5.319 1.282 5.68 1 5.999 1zm8.892 6H5.109l-.071-1h9.926l-.071 1zm-.643 9H5.752l-.571-8h9.64l-.571 8zm-.749 3h-7a.591.591 0 01-.573-.533L5.822 17h8.355l-.105 1.467a.591.591 0 01-.573.533zM16 4.5a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-1c0-.275.224-.499.499-.5h11.002a.5.5 0 01.5.5v1z"
  })));
}
LiniCoffeeCup.propTypes = {
  size: PropTypes.number.isRequired
};