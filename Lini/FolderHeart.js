function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFolderHeart({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFolderHeart';

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
    d: "M18.5 18h-17C.673 18 0 17.327 0 16.5V6c0-.352.119-.856.276-1.171l.553-1.106c.206-.413.71-.724 1.171-.724h7c.461 0 .964.311 1.171.724l.553 1.106A.406.406 0 0011 5h7.5c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5zM2 4a.404.404 0 00-.276.171l-.553 1.106A2.056 2.056 0 001 6.001v10.5a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5H11c-.461 0-.965-.311-1.171-.724l-.553-1.106A.406.406 0 009 4H2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 15a.502.502 0 01-.224-.053 15.064 15.064 0 01-2.069-1.297c-1.455-1.095-2.192-2.154-2.192-3.149 0-.735.294-1.391.827-1.846.494-.422 1.172-.654 1.909-.654.598 0 1.215.275 1.75.769.535-.494 1.152-.769 1.75-.769.737 0 1.415.232 1.909.654.534.456.827 1.111.827 1.846 0 .995-.738 2.055-2.192 3.149a15.132 15.132 0 01-2.069 1.297.505.505 0 01-.224.053zM7.75 9c-.864 0-1.736.464-1.736 1.5 0 1.284 2.378 2.836 3.484 3.435a14.459 14.459 0 001.705-1.093c1.15-.867 1.783-1.699 1.783-2.342 0-1.036-.872-1.5-1.736-1.5-.44 0-.949.304-1.361.814a.502.502 0 01-.778 0C8.699 9.304 8.19 9 7.75 9z"
  })));
}
LiniFolderHeart.propTypes = {
  size: PropTypes.number.isRequired
};