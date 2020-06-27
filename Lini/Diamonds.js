function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDiamonds({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDiamonds';

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
    d: "M9.5 20a.5.5 0 01-.395-.193l-7-9a.501.501 0 010-.614l7-9a.5.5 0 01.79 0l7 9c.14.181.14.433 0 .614l-7 9A.5.5 0 019.5 20zm-6.367-9.5L9.5 18.686l6.367-8.186L9.5 2.314 3.133 10.5z"
  })));
}
LiniDiamonds.propTypes = {
  size: PropTypes.number.isRequired
};