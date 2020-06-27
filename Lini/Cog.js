function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCog({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCog';

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
    d: "M7.631 19.702a.493.493 0 01-.125-.016 9.952 9.952 0 01-2.564-1.059.5.5 0 01-.186-.671 2.002 2.002 0 00-2.714-2.714.5.5 0 01-.671-.186 9.967 9.967 0 01-1.059-2.564.5.5 0 01.325-.598 1.999 1.999 0 000-3.79.5.5 0 01-.325-.598 9.952 9.952 0 011.059-2.564.5.5 0 01.671-.186 2.001 2.001 0 002.714-2.714.5.5 0 01.186-.671A9.967 9.967 0 017.506.312a.5.5 0 01.598.325 1.999 1.999 0 003.79 0 .5.5 0 01.598-.325 9.952 9.952 0 012.564 1.059.5.5 0 01.186.671 2.002 2.002 0 002.714 2.714.5.5 0 01.671.186 9.967 9.967 0 011.059 2.564.5.5 0 01-.325.598 1.999 1.999 0 000 3.79.5.5 0 01.325.598 9.952 9.952 0 01-1.059 2.564.5.5 0 01-.671.186 2.002 2.002 0 00-2.714 2.714.5.5 0 01-.186.671 9.967 9.967 0 01-2.564 1.059.5.5 0 01-.598-.325 1.999 1.999 0 00-3.79 0 .502.502 0 01-.474.341zM10 17a3 3 0 012.655 1.602 9.019 9.019 0 001.51-.622 3.004 3.004 0 013.816-3.816c.253-.484.462-.989.622-1.51a2.999 2.999 0 010-5.31 9.019 9.019 0 00-.622-1.51 3.004 3.004 0 01-3.816-3.816 8.901 8.901 0 00-1.51-.622 2.999 2.999 0 01-5.31 0c-.52.16-1.026.369-1.51.622a3.004 3.004 0 01-3.816 3.816 8.901 8.901 0 00-.622 1.51 2.999 2.999 0 010 5.31c.16.52.369 1.026.622 1.51a3.004 3.004 0 013.816 3.816c.484.253.989.462 1.51.622A2.998 2.998 0 0110 17z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
  })));
}
LiniCog.propTypes = {
  size: PropTypes.number.isRequired
};