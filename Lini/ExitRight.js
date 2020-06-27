import React from 'react';
import PropTypes from 'prop-types';
export default function LiniExitRight({
  size,
  ...props
}) {
  let className = 'Component Lini LiniExitRight';

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
    d: "M0 16.5v-12C0 3.673.673 3 1.5 3h10c.827 0 1.5.673 1.5 1.5v4a.5.5 0 01-1 0v-4a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-4a.5.5 0 011 0v4c0 .827-.673 1.5-1.5 1.5h-10C.673 18 0 17.327 0 16.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.354 13.853l3-3a.5.5 0 000-.707l-3-3a.5.5 0 00-.707.707L17.793 10H6.5a.5.5 0 000 1h11.293l-2.146 2.147a.497.497 0 000 .706.5.5 0 00.707 0z"
  })));
}
LiniExitRight.propTypes = {
  size: PropTypes.number.isRequired
};