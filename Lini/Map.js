function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMap({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMap';

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
    d: "M14.5 7c-.827 0-1.5-.673-1.5-1.5S13.673 4 14.5 4s1.5.673 1.5 1.5S15.327 7 14.5 7zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 13a.5.5 0 01-.38-.175c-.032-.037-.79-.926-1.554-2.265C11.527 8.742 11 7.039 11 5.499c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.54-.527 3.242-1.566 5.061-.765 1.338-1.523 2.228-1.554 2.265a.5.5 0 01-.38.175zm0-10A2.503 2.503 0 0012 5.5c0 2.543 1.717 5.139 2.5 6.19.782-1.052 2.5-3.651 2.5-6.19C17 4.122 15.878 3 14.5 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 0h-17C.673 0 0 .673 0 1.5v17c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-17c0-.827-.673-1.5-1.5-1.5zm-12 18a.5.5 0 00-.5.5v.5H4V1h2v.5a.5.5 0 001 0V1h2v18H7v-.5a.5.5 0 00-.5-.5zM3 16H1v-1h2v1zm7-1h9v1h-9v-1zm9-13.5V14h-9V1h8.5a.5.5 0 01.5.5zM1.5 1H3v13H1V1.5a.5.5 0 01.5-.5zM1 18.5V17h2v2H1.5a.5.5 0 01-.5-.5zm17.5.5H10v-2h9v1.5a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 5a.5.5 0 00.5-.5v-1a.5.5 0 00-1 0v1a.5.5 0 00.5.5zM6.5 8a.5.5 0 00.5-.5v-1a.5.5 0 00-1 0v1a.5.5 0 00.5.5zM6.5 11a.5.5 0 00.5-.5v-1a.5.5 0 00-1 0v1a.5.5 0 00.5.5zM6.5 14a.5.5 0 00.5-.5v-1a.5.5 0 00-1 0v1a.5.5 0 00.5.5zM7 15.5a.5.5 0 00-1 0v1a.5.5 0 001 0v-1z"
  })));
}
LiniMap.propTypes = {
  size: PropTypes.number.isRequired
};