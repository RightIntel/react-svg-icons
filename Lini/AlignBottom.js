function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniAlignBottom({
  size,
  ...props
}) {
  let className = 'Component Lini LiniAlignBottom';

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
    d: "M0 19.5a.5.5 0 00.5.5h19a.5.5 0 000-1H.5a.5.5 0 00-.5.5zM12.5 7h4c.827 0 1.5.673 1.5 1.5v8c0 .827-.673 1.5-1.5 1.5h-4c-.827 0-1.5-.673-1.5-1.5v-8c0-.827.673-1.5 1.5-1.5zM17 8.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-8zM3.5 1h4C8.327 1 9 1.673 9 2.5v14c0 .827-.673 1.5-1.5 1.5h-4c-.827 0-1.5-.673-1.5-1.5v-14C2 1.673 2.673 1 3.5 1zM8 2.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5v14a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-14z"
  })));
}
LiniAlignBottom.propTypes = {
  size: PropTypes.number.isRequired
};