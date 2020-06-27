function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniToiletPaper({
  size,
  ...props
}) {
  let className = 'Component Lini LiniToiletPaper';

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
    d: "M5.5 10c-.281 0-.807-.136-1.171-1.047C4.117 8.423 4 7.729 4 7s.117-1.424.329-1.953C4.693 4.136 5.219 4 5.5 4s.807.136 1.171 1.047C6.883 5.577 7 6.271 7 7s-.117 1.424-.329 1.953C6.307 9.864 5.781 10 5.5 10zm0-4.988C5.336 5.141 5 5.826 5 7s.336 1.859.5 1.988C5.664 8.859 6 8.174 6 7s-.336-1.859-.5-1.988z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 1h-9C3.537 1 2 3.636 2 7c0 .167.004.333.011.496L2 18.499a.501.501 0 00.724.448l1.776-.888 1.776.888c.141.07.306.07.447 0l1.776-.888 1.776.888c.141.07.306.07.447 0l1.776-.888 1.776.888a.498.498 0 00.723-.447v-5.558c1.718-.404 3-2.869 3-5.942 0-3.364-1.537-6-3.5-6zM3.818 3.35C4.286 2.492 4.899 2 5.5 2s1.214.492 1.682 1.35C7.709 4.317 8 5.613 8 7s-.29 2.683-.818 3.65C6.714 11.508 6.101 12 5.5 12s-1.214-.492-1.682-1.35c-.467-.856-.748-1.971-.806-3.179l.001-.964c.06-1.199.341-2.306.805-3.157zm8.906 13.703a.502.502 0 00-.447 0l-1.776.888-1.776-.888a.502.502 0 00-.447 0l-1.776.888-1.776-.888a.502.502 0 00-.447 0l-1.276.638.007-6.44c.63 1.086 1.508 1.75 2.493 1.75h8.5v4.691l-1.276-.638zm3.458-6.403c-.468.858-1.081 1.35-1.682 1.35H7.46C8.395 10.934 9 9.11 9 7s-.605-3.934-1.54-5h7.04c.601 0 1.214.492 1.682 1.35.527.967.818 2.263.818 3.65s-.29 2.683-.818 3.65z"
  })));
}
LiniToiletPaper.propTypes = {
  size: PropTypes.number.isRequired
};