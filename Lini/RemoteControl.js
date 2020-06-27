function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniRemoteControl({
  size,
  ...props
}) {
  let className = 'Component Lini LiniRemoteControl';

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
    d: "M11.5 20h-4c-.827 0-1.5-.673-1.5-1.5v-7c0-.827.673-1.5 1.5-1.5h4c.827 0 1.5.673 1.5 1.5v7c0 .827-.673 1.5-1.5 1.5zm-4-9a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 15c-.827 0-1.5-.673-1.5-1.5S8.673 12 9.5 12s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM11.767 8.035a.499.499 0 01-.378-.172 2.501 2.501 0 00-3.778 0 .5.5 0 11-.755-.655 3.503 3.503 0 015.29 0 .5.5 0 01-.377.827z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.966 6.07a.5.5 0 01-.377-.827 6.5 6.5 0 019.824 0 .5.5 0 11-.755.655 5.5 5.5 0 00-8.313 0 .499.499 0 01-.378.172z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.698 4.106a.5.5 0 01-.377-.827 9.5 9.5 0 0114.358 0 .5.5 0 11-.755.655 8.5 8.5 0 00-12.847 0 .499.499 0 01-.378.172z"
  })));
}
LiniRemoteControl.propTypes = {
  size: PropTypes.number.isRequired
};