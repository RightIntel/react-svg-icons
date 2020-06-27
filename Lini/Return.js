function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniReturn({
  size,
  ...props
}) {
  let className = 'Component Lini LiniReturn';

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
    d: "M10 20c-3.67 0-7.039-2.005-8.793-5.233a.5.5 0 11.879-.477A9.002 9.002 0 0010 19c4.963 0 9-4.037 9-9s-4.037-9-9-9a8.995 8.995 0 00-7.928 4.737.501.501 0 01-.929-.343l.869-4a.501.501 0 01.977.212l-.353 1.627A9.991 9.991 0 0110.001 0c2.671 0 5.182 1.04 7.071 2.929s2.929 4.4 2.929 7.071c0 2.671-1.04 5.182-2.929 7.071S12.672 20 10.001 20z"
  })));
}
LiniReturn.propTypes = {
  size: PropTypes.number.isRequired
};