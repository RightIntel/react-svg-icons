function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniAlignRight({
  size,
  ...props
}) {
  let className = 'Component Lini LiniAlignRight';

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
    d: "M19.5 20a.5.5 0 00.5-.5V.5a.5.5 0 00-1 0v19a.5.5 0 00.5.5zM7 7.5v-4C7 2.673 7.673 2 8.5 2h8c.827 0 1.5.673 1.5 1.5v4c0 .827-.673 1.5-1.5 1.5h-8C7.673 9 7 8.327 7 7.5zM8.5 3a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-8zM1 16.5v-4c0-.827.673-1.5 1.5-1.5h14c.827 0 1.5.673 1.5 1.5v4c0 .827-.673 1.5-1.5 1.5h-14c-.827 0-1.5-.673-1.5-1.5zM2.5 12a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h14a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-14z"
  })));
}
LiniAlignRight.propTypes = {
  size: PropTypes.number.isRequired
};