function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCarLock({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCarLock';

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
    d: "M5.5 16c-.827 0-1.5-.673-1.5-1.5S4.673 13 5.5 13s1.5.673 1.5 1.5S6.327 16 5.5 16zm0-2a.5.5 0 100 1 .5.5 0 000-1zM14.5 16c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.958 11.907c-.13-.792-.553-3.214-1.011-4.131-.305-.61-1.088-1.077-2.326-1.386C12.615 6.139 11.329 6 10 6c-.522 0-1.041.021-1.542.063a.5.5 0 00.083.997c.473-.04.964-.06 1.458-.06 2.885 0 4.756.63 5.053 1.224.287.575.606 2.096.804 3.183a5.143 5.143 0 00-.303-.08c-1.37-.326-3.308-.326-5.553-.326-.526 0-1.024 0-1.504.004a.5.5 0 00.004 1h.004c.476-.004.972-.004 1.496-.004 2.182 0 4.066 0 5.322.299a3.534 3.534 0 01.953.355c.505.299.725.725.725 1.346v2.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-2.5c0-.145.012-.281.036-.404a.5.5 0 10-.981-.193A3.07 3.07 0 002 14v2.5c0 .652.418 1.208 1 1.414V19c0 .551.449 1 1 1h1c.551 0 1-.449 1-1v-1h8v1c0 .551.449 1 1 1h1c.551 0 1-.449 1-1v-1.086c.582-.206 1-.762 1-1.414V14c0-.921-.343-1.614-1.042-2.093zM5 19H4v-1h1v1zm10 0v-1h1v1h-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 6.086V5.5C6 4.122 4.878 3 3.5 3S1 4.122 1 5.5v.586c-.582.206-1 .762-1 1.414v3c0 .827.673 1.5 1.5 1.5h4c.827 0 1.5-.673 1.5-1.5v-3c0-.652-.418-1.208-1-1.414zM3.5 4C4.327 4 5 4.673 5 5.5V6H2v-.5C2 4.673 2.673 4 3.5 4zM6 10.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v3z"
  })));
}
LiniCarLock.propTypes = {
  size: PropTypes.number.isRequired
};