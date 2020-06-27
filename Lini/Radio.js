function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniRadio({
  size,
  ...props
}) {
  let className = 'Component Lini LiniRadio';

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
    d: "M13.5 18C11.019 18 9 15.981 9 13.5S11.019 9 13.5 9s4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zm0-8c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM5 13c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM17.5 8h-2a.5.5 0 010-1h2a.5.5 0 010 1zM13.5 8h-10a.5.5 0 010-1h10a.5.5 0 010 1zM5.5 17c-.827 0-1.5-.673-1.5-1.5S4.673 14 5.5 14s1.5.673 1.5 1.5S6.327 17 5.5 17zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 5H6.193L16.68.967a.5.5 0 10-.359-.933L3.408 5.001h-.907a2.503 2.503 0 00-2.5 2.5v10c0 1.378 1.122 2.5 2.5 2.5h15c1.378 0 2.5-1.122 2.5-2.5v-10c0-1.378-1.122-2.5-2.5-2.5zM19 17.5c0 .827-.673 1.5-1.5 1.5h-15c-.827 0-1.5-.673-1.5-1.5v-10C1 6.673 1.673 6 2.5 6h15c.827 0 1.5.673 1.5 1.5v10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 14c-.132 0-.261-.053-.353-.147S13 13.631 13 13.5a.498.498 0 01.5-.5.5.5 0 010 1zM13.5 12c-.132 0-.261-.053-.353-.147S13 11.631 13 11.5a.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5zM11.5 14c-.132 0-.261-.053-.353-.147S11 13.631 11 13.5c0-.132.053-.261.147-.353S11.369 13 11.5 13a.498.498 0 01.5.5.5.5 0 01-.5.5zM13.5 16c-.132 0-.261-.053-.353-.147S13 15.631 13 15.5a.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5zM15.5 14c-.132 0-.261-.053-.353-.147S15 13.631 15 13.5a.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5zM11.5 12c-.132 0-.261-.053-.353-.147S11 11.631 11 11.5a.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5zM15.5 12c-.132 0-.261-.053-.353-.147S15 11.631 15 11.5a.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5zM11.5 16c-.132 0-.261-.053-.353-.147S11 15.631 11 15.5a.498.498 0 01.5-.5.5.5 0 010 1zM15.5 16c-.132 0-.261-.053-.353-.147S15 15.631 15 15.5a.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5z"
  })));
}
LiniRadio.propTypes = {
  size: PropTypes.number.isRequired
};