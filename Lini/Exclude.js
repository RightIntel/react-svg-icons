function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniExclude({
  size,
  ...props
}) {
  let className = 'Component Lini LiniExclude';

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
    d: "M10 7h1v1h-1V7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.016 8.016H9.985V6.985h1.031v1.031zm-1-.032h.969v-.969h-.969v.969zM8 7h1v1H8V7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.016 8.016H7.985V6.985h1.031v1.031zm-1-.032h.969v-.969h-.969v.969zM6 7h1v1H6V7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.016 8.016H5.985V6.985h1.031v1.031zm-1-.032h.969v-.969h-.969v.969zM6 9h1v1H6V9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.016 10.016H5.985V8.985h1.031v1.031zm-1-.032h.969v-.969h-.969v.969zM6 11h1v1H6v-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.016 12.016H5.985v-1.031h1.031v1.031zm-1-.032h.969v-.969h-.969v.969zM8 13h1v1H8v-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.016 14.016H7.985v-1.031h1.031v1.031zm-1-.032h.969v-.969h-.969v.969zM10 13h1v1h-1v-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.016 14.016H9.985v-1.031h1.031v1.031zm-1-.032h.969v-.969h-.969v.969zM12 13h1v1h-1v-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.016 14.016h-1.031v-1.031h1.031v1.031zm-1-.032h.969v-.969h-.969v.969zM12 11h1v1h-1v-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.016 12.016h-1.031v-1.031h1.031v1.031zm-1-.032h.969v-.969h-.969v.969zM12 9h1v1h-1V9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.016 10.016h-1.031V8.985h1.031v1.031zm-1-.032h.969v-.969h-.969v.969zM12 7h1v1h-1V7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.5 13a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h10a.5.5 0 01.5.5V6h1V2.5c0-.827-.673-1.5-1.5-1.5h-10C.673 1 0 1.673 0 2.5v10c0 .827.673 1.5 1.5 1.5H5v-1H1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 13h1v1H6v-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 7H14v1h3.5a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5V15H6v3.5c0 .827.673 1.5 1.5 1.5h10c.827 0 1.5-.673 1.5-1.5v-10c0-.827-.673-1.5-1.5-1.5z"
  })));
}
LiniExclude.propTypes = {
  size: PropTypes.number.isRequired
};