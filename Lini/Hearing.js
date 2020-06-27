function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHearing({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHearing';

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
    d: "M13 18c-.943 0-1.727-.371-2.268-1.074-.479-.622-.732-1.462-.732-2.426a.5.5 0 011 0c0 1.209.525 2.5 2 2.5.436 0 .805-.327 1.037-.602.395-.467.735-1.171.982-2.036.473-1.654 1.153-2.661 1.753-3.55C17.458 9.797 18 8.994 18 7.499c0-2.607-1.893-4.5-4.5-4.5a4.505 4.505 0 00-4.5 4.5.5.5 0 01-1 0c0-3.033 2.467-5.5 5.5-5.5 1.493 0 2.872.538 3.883 1.516C18.426 4.523 19 5.938 19 7.499c0 1.801-.679 2.807-1.399 3.872-.586.867-1.192 1.764-1.62 3.265-.29 1.014-.687 1.824-1.18 2.407-.529.625-1.152.956-1.801.956zM8.066 17.189a.499.499 0 01-.474-.658A7.99 7.99 0 008 14a7.994 7.994 0 00-2.812-6.09.5.5 0 01.649-.761A8.991 8.991 0 019 14c0 .973-.155 1.931-.46 2.847a.5.5 0 01-.474.342zM5.219 16.24a.499.499 0 01-.474-.658C4.914 15.074 5 14.542 5 14a4.994 4.994 0 00-1.758-3.806.5.5 0 01.649-.761 5.996 5.996 0 011.802 6.465.5.5 0 01-.474.342zM2.372 15.291a.499.499 0 01-.474-.658 1.998 1.998 0 00-.601-2.156.5.5 0 01.649-.761 2.996 2.996 0 01.901 3.232.5.5 0 01-.474.342z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 4C11.57 4 10 5.57 10 7.5c0 .827.673 1.5 1.5 1.5.498 0 .75-.365.916-.606.189-.273.285-.394.584-.394.928 0 1 1.148 1 1.5 0 .827-.673 1.5-1.5 1.5a.5.5 0 000 1c1.378 0 2.5-1.122 2.5-2.5 0-.672-.16-1.259-.464-1.698A1.818 1.818 0 0013 7c-.836 0-1.193.517-1.406.826a1.692 1.692 0 01-.129.173A.5.5 0 0111 7.5C11 6.122 12.122 5 13.5 5S16 6.122 16 7.5a.5.5 0 001 0C17 5.57 15.43 4 13.5 4z"
  })));
}
LiniHearing.propTypes = {
  size: PropTypes.number.isRequired
};