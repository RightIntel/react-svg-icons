import React from 'react';
import PropTypes from 'prop-types';
export default function LiniZoomOut({
  size,
  ...props
}) {
  let className = 'Component Lini LiniZoomOut';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.869 19.162l-5.943-6.484A7.448 7.448 0 0015.001 7.5c0-2.003-.78-3.887-2.197-5.303S9.504 0 7.501 0 3.614.78 2.198 2.197.001 5.497.001 7.5s.78 3.887 2.197 5.303S5.498 15 7.501 15a7.441 7.441 0 004.688-1.645l5.943 6.483a.497.497 0 00.707.031.5.5 0 00.031-.706zM1 7.5C1 3.916 3.916 1 7.5 1S14 3.916 14 7.5 11.084 14 7.5 14 1 11.084 1 7.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 8h-8a.5.5 0 010-1h8a.5.5 0 010 1z"
  })));
}
LiniZoomOut.propTypes = {
  size: PropTypes.number.isRequired
};