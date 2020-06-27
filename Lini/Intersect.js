function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniIntersect({
  size,
  ...props
}) {
  let className = 'Component Lini LiniIntersect';

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
    d: "M16 7h1v1h-1V7zM16 19h1v1h-1v-1zM14 19h1v1h-1v-1zM12 19h1v1h-1v-1zM10 19h1v1h-1v-1zM8 19h1v1H8v-1zM18 15h1v1h-1v-1zM18 13h1v1h-1v-1zM18 17h1v1h-1v-1zM18 9h1v1h-1V9zM18 11h1v1h-1v-1zM6 17h1v1H6v-1zM14 7h1v1h-1V7zM0 9h1v1H0V9zM0 5h1v1H0V5zM0 3h1v1H0V3zM0 11h1v1H0v-1zM0 7h1v1H0V7zM12 3h1v1h-1V3zM12 5h1v1h-1V5zM4 1h1v1H4V1zM2 1h1v1H2V1zM6 1h1v1H6V1zM10 1h1v1h-1V1zM8 1h1v1H8V1zM4 13h1v1H4v-1zM2 13h1v1H2v-1zM7.5 7C6.673 7 6 7.673 6 8.5V14h5.5c.827 0 1.5-.673 1.5-1.5V7H7.5zm4.5 5.5a.5.5 0 01-.5.5H7V8.5a.5.5 0 01.5-.5H12v4.5zM6 15h1v1H6v-1zM18 7h1v1h-1V7zM18 19h1v1h-1v-1zM0 13h1v1H0v-1zM0 1h1v1H0V1zM12 1h1v1h-1V1zM6 19h1v1H6v-1z"
  })));
}
LiniIntersect.propTypes = {
  size: PropTypes.number.isRequired
};