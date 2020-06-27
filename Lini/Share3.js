function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniShare3({
  size,
  ...props
}) {
  let className = 'Component Lini LiniShare3';

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
    d: "M9.5 14C7.57 14 6 12.43 6 10.5S7.57 7 9.5 7 13 8.57 13 10.5 11.43 14 9.5 14zm0-6C8.122 8 7 9.122 7 10.5S8.122 13 9.5 13s2.5-1.122 2.5-2.5S10.878 8 9.5 8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 11h-3a.5.5 0 010-1h2.519A6.509 6.509 0 019.5 4a6.489 6.489 0 015.416 2.906.5.5 0 11-.833.553A5.493 5.493 0 009.499 5a5.506 5.506 0 00-5.5 5.5.5.5 0 01-.5.5zM9.5 17a6.489 6.489 0 01-5.416-2.906.5.5 0 11.833-.553A5.493 5.493 0 009.501 16c3.033 0 5.5-2.467 5.5-5.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-2.519a6.509 6.509 0 01-6.481 6z"
  })));
}
LiniShare3.propTypes = {
  size: PropTypes.number.isRequired
};