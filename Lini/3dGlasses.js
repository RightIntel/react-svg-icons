function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function Lini3dGlasses({
  size,
  ...props
}) {
  let className = 'Component Lini Lini3dGlasses';

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
    d: "M18.5 15H13c-.743 0-1.561-.532-1.863-1.211L10 11.231l-1.137 2.558C8.561 14.468 7.743 15 7 15H1.5C.673 15 0 14.327 0 13.5v-6C0 6.673.673 6 1.5 6h17c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5zM10 10.037c.169 0 .593.066.863.674l1.188 2.672c.143.323.596.617.949.617h5.5a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-17a.5.5 0 00-.5.5v6a.5.5 0 00.5.5H7c.353 0 .806-.294.949-.617l1.188-2.672c.27-.608.694-.674.863-.674z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 13h-4a.5.5 0 01-.447-.276l-2-4a.5.5 0 01.447-.723h6a.5.5 0 01.5.5v4a.5.5 0 01-.5.5zm-3.691-1H17V9h-4.691l1.5 3zM6.5 13h-4a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h6a.5.5 0 01.447.723l-2 4a.5.5 0 01-.447.276zM3 12h3.191l1.5-3H3v3z"
  })));
}
Lini3dGlasses.propTypes = {
  size: PropTypes.number.isRequired
};