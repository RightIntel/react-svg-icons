function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPlanet({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPlanet';

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
    d: "M19.675 4.414c-.397-.687-1.157-1.141-2.199-1.311-.883-.145-1.951-.094-3.176.149a7.943 7.943 0 00-4.301-1.251c-2.137 0-4.146.832-5.657 2.343a7.948 7.948 0 00-2.335 6.004c-.824.94-1.402 1.84-1.719 2.678-.373.988-.361 1.873.036 2.561.528.914 1.664 1.391 3.262 1.391a10 10 0 001.449-.113c.218-.032.439-.07.664-.115a7.942 7.942 0 004.3 1.251c2.137 0 4.146-.832 5.657-2.343a7.948 7.948 0 002.335-6.004c.152-.173.297-.347.434-.52 1.481-1.873 1.925-3.549 1.249-4.719zM10 3c3.623 0 6.613 2.767 6.965 6.3-1.29 1.391-3.063 2.765-5.096 3.938-2.031 1.173-4.106 2.021-5.955 2.443A6.995 6.995 0 012.999 10c0-3.86 3.14-7 7-7zM1.191 15.086c-.431-.746-.059-1.969.993-3.372a7.94 7.94 0 002.427 4.197c-1.753.211-2.992-.085-3.419-.825zM10 17a6.959 6.959 0 01-2.854-.609c1.673-.491 3.468-1.274 5.224-2.287s3.331-2.177 4.593-3.381C16.6 14.244 13.616 17 10 17zm5.657-12.657a8.036 8.036 0 00-.267-.255c1.742-.211 2.989.079 3.42.826.427.74.065 1.96-.993 3.371a7.94 7.94 0 00-2.16-3.942z"
  })));
}
LiniPlanet.propTypes = {
  size: PropTypes.number.isRequired
};