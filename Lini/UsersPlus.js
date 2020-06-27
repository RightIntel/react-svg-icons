function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniUsersPlus({
  size,
  ...props
}) {
  let className = 'Component Lini LiniUsersPlus';

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
    d: "M11.5 18h-4c-.827 0-1.5-.673-1.5-1.5 0-.073.012-.741.43-1.558.383-.749 1.197-1.771 2.9-2.387a.5.5 0 11.34.94c-2.597.94-2.668 2.904-2.67 3.006a.5.5 0 00.5.498h4a.5.5 0 010 1zM10.525 9.975a.502.502 0 01-.354-.146 3.971 3.971 0 01-1.172-2.828c0-2.206 1.794-4 4-4a4.004 4.004 0 013.959 4.571.5.5 0 11-.99-.142 3.004 3.004 0 00-2.97-3.429c-1.654 0-3 1.346-3 3 0 .801.312 1.555.879 2.121a.5.5 0 01-.354.853zM4.5 18h-3C.673 18 0 17.327 0 16.5c0-.037.008-.927.663-1.8.378-.505.894-.904 1.533-1.188.764-.34 1.708-.512 2.805-.512.179 0 .356.005.527.014a.5.5 0 01-.053.999 9.1 9.1 0 00-.473-.012c-3.895 0-3.997 2.38-4 2.503a.5.5 0 00.5.497h3a.5.5 0 010 1zM5 12c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zM15.5 18c-2.481 0-4.5-2.019-4.5-4.5S13.019 9 15.5 9s4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zm0-8c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 13H16v-1.5a.5.5 0 00-1 0V13h-1.5a.5.5 0 000 1H15v1.5a.5.5 0 001 0V14h1.5a.5.5 0 000-1z"
  })));
}
LiniUsersPlus.propTypes = {
  size: PropTypes.number.isRequired
};