function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniConcave({
  size,
  ...props
}) {
  let className = 'Component Lini LiniConcave';

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
    d: "M.5 18a.5.5 0 01-.474-.658C.036 17.313 1 14.364 1 10.5S.035 3.687.026 3.658a.502.502 0 01.596-.643C.661 3.025 4.626 4 9.501 4c4.882 0 8.839-.975 8.879-.985a.5.5 0 01.595.643c-.01.029-.974 2.978-.974 6.842s.965 6.813.974 6.842a.502.502 0 01-.596.643C18.333 17.973 14.371 17 9.5 17c-4.882 0-8.839.975-8.879.985S.54 18 .5 18zm9-2c3.717 0 6.853.537 8.289.83-.303-1.175-.789-3.497-.789-6.33s.485-5.155.789-6.33C16.354 4.463 13.217 5 9.5 5s-6.853-.537-8.289-.83C1.514 5.345 2 7.667 2 10.5s-.485 5.155-.789 6.33A42.869 42.869 0 019.5 16z"
  })));
}
LiniConcave.propTypes = {
  size: PropTypes.number.isRequired
};