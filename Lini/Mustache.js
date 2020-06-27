function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMustache({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMustache';

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
    d: "M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c2.538 0 4.923.988 6.718 2.783S19 7.963 19 10.501s-.988 4.923-2.782 6.717A9.438 9.438 0 019.5 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19s8.5-3.813 8.5-8.5S14.187 2 9.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 8C5.673 8 5 7.327 5 6.5S5.673 5 6.5 5 8 5.673 8 6.5 7.327 8 6.5 8zm0-2a.5.5 0 100 1 .5.5 0 000-1zM12.5 8c-.827 0-1.5-.673-1.5-1.5S11.673 5 12.5 5s1.5.673 1.5 1.5S13.327 8 12.5 8zm0-2a.5.5 0 100 1 .5.5 0 000-1zM15.923 12.233a.502.502 0 00-.521-.224 2.784 2.784 0 01-.536.056c-.872 0-1.402-.503-1.962-1.036-.533-.506-1.084-1.03-1.903-1.03-.597 0-1.133.263-1.5.679a1.996 1.996 0 00-1.5-.679c-.819 0-1.37.524-1.903 1.03-.561.533-1.09 1.036-1.962 1.036-.169 0-.349-.019-.536-.056a.502.502 0 00-.498.791c1.157 1.543 2.642 1.867 3.685 1.867.621 0 1.115-.117 1.355-.187.531-.154 1.018-.542 1.36-1.028.343.486.83.873 1.36 1.028.24.07.734.187 1.355.187 1.042 0 2.528-.324 3.685-1.867a.5.5 0 00.023-.567zM7.86 13.52a3.927 3.927 0 01-1.076.147 3.48 3.48 0 01-2.069-.654c.935-.179 1.556-.768 2.07-1.258.492-.468.815-.755 1.214-.755.551 0 1 .449 1 1 0 .611-.554 1.349-1.14 1.52zm4.355.147c-.497 0-.887-.092-1.076-.147-.586-.17-1.14-.909-1.14-1.52 0-.551.449-1 1-1 .4 0 .722.287 1.214.755.515.489 1.135 1.079 2.07 1.257a3.485 3.485 0 01-2.069.654z"
  })));
}
LiniMustache.propTypes = {
  size: PropTypes.number.isRequired
};