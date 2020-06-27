function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHammer2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHammer2';

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
    d: "M18.073 17.498a1.432 1.432 0 00-.485-1.037L9.227 8.98l1.804-1.804a.996.996 0 00.469.116.993.993 0 00.707-.292L13 6.207c.188-.188.292-.44.292-.707s-.104-.519-.292-.707L9.707 1.5c-.188-.188-.44-.292-.707-.292s-.519.104-.707.292l-.793.793A.995.995 0 007.208 3c0 .166.04.327.116.469L2.469 8.324A.996.996 0 002 8.208a.993.993 0 00-.707.292L.5 9.293a1 1 0 000 1.414L3.793 14c.188.188.44.292.707.292s.519-.104.707-.292L6 13.207c.318-.318.376-.798.176-1.176l1.804-1.804 7.481 8.361c.27.302.638.474 1.037.485l.041.001c.384 0 .745-.151 1.022-.427l.086-.086c.286-.286.438-.664.427-1.063zM9 2.207L12.293 5.5l-.792.792H11.5v.001L8.207 3 9 2.207zm-1 2L10.293 6.5 5.5 11.293 3.207 9 8 4.207zm-3.499 9.085H4.5v.001L1.207 10 2 9.207 5.293 12.5l-.792.792zm12.438 4.562l-.086.086a.441.441 0 01-.648-.018l-6.082-6.798 6.798 6.082a.441.441 0 01.018.648z"
  })));
}
LiniHammer2.propTypes = {
  size: PropTypes.number.isRequired
};