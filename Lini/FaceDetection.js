function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFaceDetection({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFaceDetection';

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
    d: "M5.5 6C4.122 6 3 4.878 3 3.5S4.122 1 5.5 1 8 2.122 8 3.5 6.878 6 5.5 6zm0-4C4.673 2 4 2.673 4 3.5S4.673 5 5.5 5 7 4.327 7 3.5 6.327 2 5.5 2zM6.5 11h-4c-.425 0-.796-.177-1.019-.486s-.273-.717-.139-1.12c.022-.065.229-.649.849-1.232.564-.53 1.596-1.161 3.309-1.161.38 0 .746.031 1.088.092a.5.5 0 01-.176.984A5.184 5.184 0 005.5 8C2.891 8 2.296 9.692 2.291 9.709c-.031.093-.03.175.002.22s.11.071.208.071h4a.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 7h-1a.5.5 0 01-.5-.5v-6a.5.5 0 01.5-.5h1a.5.5 0 010 1H2v5h.5a.5.5 0 010 1zM9.5 7h-1a.5.5 0 010-1H9V1h-.5a.5.5 0 010-1h1a.5.5 0 01.5.5v6a.5.5 0 01-.5.5zM13 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 16h-1a.5.5 0 010-1h.5V9h-.5a.5.5 0 010-1h1a.5.5 0 01.5.5v7a.5.5 0 01-.5.5zM9.5 16h-1a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h1a.5.5 0 010 1H9v6h.5a.5.5 0 010 1zM16.5 20h-7c-.425 0-.796-.177-1.019-.486s-.273-.717-.139-1.12c.033-.098.842-2.393 4.658-2.393s4.626 2.296 4.658 2.393c.134.403.084.811-.139 1.12S16.925 20 16.5 20zm-7.211-1.286c-.03.091-.029.172.003.215s.11.071.208.071h7c.098 0 .176-.027.208-.071s.033-.124.003-.215c-.011-.029-.175-.442-.679-.847-.704-.567-1.752-.866-3.032-.866s-2.327.3-3.032.866c-.504.406-.668.818-.679.847z"
  })));
}
LiniFaceDetection.propTypes = {
  size: PropTypes.number.isRequired
};