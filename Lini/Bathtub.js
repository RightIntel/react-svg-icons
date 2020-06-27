function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBathtub({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBathtub';

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
    d: "M16.5 20h-1a.5.5 0 010-1h1a.5.5 0 010 1zM4.5 20h-1a.5.5 0 010-1h1a.5.5 0 010 1zM20 12.5c0-.827-.673-1.5-1.5-1.5H3V1.5a.5.5 0 01.5-.5H5c.142 0 .399.106.5.207l.126.126a3.255 3.255 0 00.326 4.215.5.5 0 00.708 0l3.889-3.889a.5.5 0 000-.707A3.228 3.228 0 008.251 0c-.699 0-1.364.219-1.918.625L6.208.5C5.918.21 5.411 0 5.001 0h-1.5c-.827 0-1.5.673-1.5 1.5V11h-.5c-.827 0-1.5.673-1.5 1.5 0 .652.418 1.208 1 1.414V16.5c0 1.378 1.122 2.5 2.5 2.5h13c1.378 0 2.5-1.122 2.5-2.5v-2.586c.582-.206 1-.762 1-1.414zM9.448 1.345L6.345 4.448a2.255 2.255 0 01.314-2.789C7.084 1.234 7.649 1 8.25 1c.431 0 .843.12 1.198.345zM16.5 18h-13c-.827 0-1.5-.673-1.5-1.5V14h16v2.5c0 .827-.673 1.5-1.5 1.5zm2-5h-17a.5.5 0 010-1h17a.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 6.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 4.5a.5.5 0 11-1 0 .5.5 0 011 0zM12 4.5a.5.5 0 11-1 0 .5.5 0 011 0zM12 6.5a.5.5 0 11-1 0 .5.5 0 011 0zM14 4.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zM14 6.5a.5.5 0 11-1 0 .5.5 0 011 0zM12 8.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  })));
}
LiniBathtub.propTypes = {
  size: PropTypes.number.isRequired
};