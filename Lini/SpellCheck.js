function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSpellCheck({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSpellCheck';

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
    d: "M4.5 14a.5.5 0 00-.5.5v.001A2.485 2.485 0 002.5 14C1.122 14 0 15.122 0 16.5S1.122 19 2.5 19c.562 0 1.082-.187 1.5-.501v.001a.5.5 0 001 0v-4a.5.5 0 00-.5-.5zm-2 4c-.827 0-1.5-.673-1.5-1.5S1.673 15 2.5 15s1.5.673 1.5 1.5S3.327 18 2.5 18zM8.5 14c-.562 0-1.082.187-1.5.501V10.5a.5.5 0 00-1 0v8a.5.5 0 001 0v-.001c.418.315.938.501 1.5.501 1.378 0 2.5-1.122 2.5-2.5S9.878 14 8.5 14zm0 4c-.827 0-1.5-.673-1.5-1.5S7.673 15 8.5 15s1.5.673 1.5 1.5S9.327 18 8.5 18zM14.5 19c-1.378 0-2.5-1.122-2.5-2.5a2.503 2.503 0 013.75-2.165.5.5 0 01-.5.866 1.501 1.501 0 100 2.6.5.5 0 01.501.865 2.501 2.501 0 01-1.25.335zM11.5 10.5a.502.502 0 01-.354-.146l-3-3a.5.5 0 01.707-.707l2.646 2.646 6.646-6.646a.5.5 0 01.707.707l-7 7a.498.498 0 01-.354.146z"
  })));
}
LiniSpellCheck.propTypes = {
  size: PropTypes.number.isRequired
};