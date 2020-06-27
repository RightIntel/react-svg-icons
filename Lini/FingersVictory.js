function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFingersVictory({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFingersVictory';

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
    d: "M16.646.887A1.976 1.976 0 0015.373.04a2.048 2.048 0 00-2.377 1.563L11.88 6.706 9.931 1.341C9.556.309 8.406-.24 7.368.117S5.76 1.615 6.096 2.659l1.418 4.407a2.002 2.002 0 00-2.401 1.272A2.002 2.002 0 002 9.999v2c0 1.165.326 3.153 1.244 4.918.473.91 1.04 1.634 1.685 2.151.769.617 1.634.93 2.571.93h4c2.788 0 4.5-3.203 4.5-5.5 0-1.781-.088-2.706-.159-3.449a14.883 14.883 0 01-.091-1.551c0-.698.714-4.637 1.195-7.116a1.972 1.972 0 00-.298-1.497zM7 8c.551 0 1 .449 1 1v1.363l-1.487-.303A1.998 1.998 0 006 9.996V9c0-.551.449-1 1-1zm-4 2c0-.551.449-1 1-1s1 .449 1 1v.271a1.99 1.99 0 00-.921 1.208 1.987 1.987 0 00.183 1.487A1.002 1.002 0 013 12.001v-2zm11.025 7.467C13.544 18.166 12.716 19 11.5 19h-4c-2.35 0-3.782-2.76-4.29-5.163a1.997 1.997 0 001.798-.11c.15.087.312.154.483.2l3.877 1.055a.5.5 0 10.263-.965l-3.879-1.056a1 1 0 01-.406-.218l-.011-.01a.992.992 0 01-.29-.997.997.997 0 011.255-.7l2.098.427.003.001 3 .611c.794.162 1.702.38 2.424.771.791.428 1.176.969 1.176 1.654 0 .956-.373 2.092-.975 2.967zm1.939-15.278l-.001.004c-.124.641-1.213 6.289-1.213 7.307 0 .645.044 1.109.095 1.645.033.349.07.739.1 1.245a4.282 4.282 0 00-.645-.423c-.837-.454-1.835-.695-2.701-.871l-2.6-.529V8.751c0-.313-.403-1.58-.483-1.831L7.048 2.355c-.171-.53.119-1.109.646-1.29s1.108.097 1.298.619l2.538 6.988a.5.5 0 00.958-.064l1.485-6.79a1.041 1.041 0 011.209-.795c.26.051.485.2.633.421s.201.486.149.746z"
  })));
}
LiniFingersVictory.propTypes = {
  size: PropTypes.number.isRequired
};