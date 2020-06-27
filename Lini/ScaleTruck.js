function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniScaleTruck({
  size,
  ...props
}) {
  let className = 'Component Lini LiniScaleTruck';

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
    d: "M16.5 4a.499.499 0 01-.25-.933l1.732-1a.5.5 0 01.5.866l-1.732 1A.504.504 0 0116.5 4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 17H17V6.964A3.505 3.505 0 0020 3.5C20 1.57 18.43 0 16.5 0S13 1.57 13 3.5a3.505 3.505 0 003 3.464V17H1.5c-.827 0-1.5.673-1.5 1.5S.673 20 1.5 20h17c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5zM14 3.5C14 2.122 15.122 1 16.5 1S19 2.122 19 3.5 17.878 6 16.5 6 14 4.878 14 3.5zM18.5 19h-17a.5.5 0 010-1h17a.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.816 10.868l-.684-2.051A1.24 1.24 0 0012 8.001H9c0-.551-.449-1-1-1H1c-.551 0-1 .449-1 1v6c0 .551.449 1 1 1h1.086c.206.582.762 1 1.414 1s1.208-.418 1.414-1H8a.987.987 0 00.5-.135.997.997 0 00.5.135h1.086c.206.582.762 1 1.414 1s1.208-.418 1.414-1H13c.551 0 1-.449 1-1v-2c0-.331-.079-.818-.184-1.132zm-1.632-1.736l.289.868H11V9h1c.06 0 .165.076.184.132zM3.5 15a.5.5 0 110-1 .5.5 0 010 1zm1.414-1c-.206-.582-.762-1-1.414-1s-1.208.418-1.414 1H1V8h7v6H4.914zm6.586 1a.5.5 0 110-1 .5.5 0 010 1zm1.414-1c-.206-.582-.762-1-1.414-1s-1.208.418-1.414 1H9V9h1v1.5a.5.5 0 00.5.5h2.306l.061.184c.071.212.132.593.132.816h-.5a.5.5 0 000 1h.5v1h-.086z"
  })));
}
LiniScaleTruck.propTypes = {
  size: PropTypes.number.isRequired
};