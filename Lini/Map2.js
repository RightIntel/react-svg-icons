function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMap2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMap2';

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
    d: "M18.763 1.075a.5.5 0 00-.486-.022l-5.776 2.888-5.776-2.888a.502.502 0 00-.447 0l-6 3a.5.5 0 00-.276.447v15a.5.5 0 00.724.447l5.776-2.888 5.776 2.888c.141.07.307.07.447 0l6-3a.5.5 0 00.276-.447v-15a.5.5 0 00-.237-.425zM6 16.191l-5 2.5V4.809l5-2.5v13.882zM7 2.309l5 2.5v13.882l-5-2.5V2.309zm11 13.882l-5 2.5V4.809l5-2.5v13.882z"
  })));
}
LiniMap2.propTypes = {
  size: PropTypes.number.isRequired
};