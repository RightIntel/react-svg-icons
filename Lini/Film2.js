function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFilm2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFilm2';

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
    d: "M19.5 19H19V4h.5a.5.5 0 000-1H17V1.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5V3H8.5a.5.5 0 000 1H9v1H.5a.5.5 0 00-.5.5v6a.5.5 0 00.5.5C3.533 12 6 14.467 6 17.5a.498.498 0 00.5.5H9v1h-.5a.5.5 0 000 1h11a.5.5 0 000-1zM18 19h-5V4h5v15zm-8.5-2H9v-1h1v1h-.5zm1.5-1h1v1h-1v-1zM9 7V6h1v1H9zM7 7V6h1v1H7zM5 7V6h1v1H5zM3 7V6h1v1H3zm8-1h1v1h-1V6zm1-4h4v1h-4V2zm-2 2h2v1h-2V4zM2 6v1H1V6h1zm-1 5.019V8h11v7H6.5A6.513 6.513 0 001 11.019zM6.825 16H8v1H6.981a6.47 6.47 0 00-.156-1zM10 18h2v1h-2v-1z"
  })));
}
LiniFilm2.propTypes = {
  size: PropTypes.number.isRequired
};