function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniToothbrush({
  size,
  ...props
}) {
  let className = 'Component Lini LiniToothbrush';

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
    d: "M1.5 14a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM3.5 14a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM5.5 14a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM7.5 14a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM19.5 18h-18C.673 18 0 17.327 0 16.5S.673 15 1.5 15h18a.5.5 0 010 1h-18a.5.5 0 000 1h18a.5.5 0 010 1zM9.5 14a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM9 9H3C1.346 9 0 7.654 0 6s1.346-3 3-3h.5a.5.5 0 010 1 .5.5 0 000 1H9c1.103 0 2 .897 2 2s-.897 2-2 2zM2.02 4.257A2.002 2.002 0 001 6c0 1.103.897 2 2 2h6c.551 0 1-.449 1-1s-.449-1-1-1H3.5a1.502 1.502 0 01-1.48-1.743z"
  })));
}
LiniToothbrush.propTypes = {
  size: PropTypes.number.isRequired
};