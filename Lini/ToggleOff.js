import React from 'react';
import PropTypes from 'prop-types';
export default function LiniToggleOff({
  size,
  ...props
}) {
  let className = 'Component Lini LiniToggleOff';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 17H7c-1.87 0-3.628-.728-4.95-2.05S0 11.87 0 10s.728-3.628 2.05-4.95S5.13 3 7 3h6c1.87 0 3.628.728 4.95 2.05S20 8.13 20 10s-.728 3.628-2.05 4.95S14.87 17 13 17zM7 4c-3.308 0-6 2.692-6 6s2.692 6 6 6h6c3.308 0 6-2.692 6-6s-2.692-6-6-6H7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 14c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-7c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"
  })));
}
LiniToggleOff.propTypes = {
  size: PropTypes.number.isRequired
};