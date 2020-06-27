function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniAmbulance({
  size,
  ...props
}) {
  let className = 'Component Lini LiniAmbulance';

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
    d: "M8.5 12H7v-1.5a.5.5 0 00-1 0V12H4.5a.5.5 0 000 1H6v1.5a.5.5 0 001 0V13h1.5a.5.5 0 000-1zM13.5 5a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 13h-.662l-1.503-3.757c-.217-.543-.754-.994-1.336-1.167V7.5c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v.586a1.505 1.505 0 00-.5.297 1.494 1.494 0 00-1-.383h-8c-.827 0-1.5.673-1.5 1.5v7c0 .827.673 1.5 1.5 1.5h1.5c0 1.103.897 2 2 2s2-.897 2-2h6c0 1.103.897 2 2 2s2-.897 2-2h.5c.827 0 1.5-.673 1.5-1.5v-2c0-.827-.673-1.5-1.5-1.5zm-2.538-2l.8 2H14.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h1.462zM13.5 7a.5.5 0 01.5.5V8h-1v-.5a.5.5 0 01.5-.5zM6 19c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm1.731-2a2 2 0 00-3.462 0H2.5a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h8a.5.5 0 01.5.5V17H7.731zM16 19c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm2.5-2h-.769a2 2 0 00-3.462 0H12V9.5a.5.5 0 01.5-.5h2c.346 0 .779.293.907.614l.154.386h-1.062c-.827 0-1.5.673-1.5 1.5v1c0 .827.673 1.5 1.5 1.5h4a.5.5 0 01.5.5v.5h-.543a.5.5 0 000 1h.543v.5a.5.5 0 01-.5.5zM15.5 6a.5.5 0 01-.354-.853l1-1a.5.5 0 01.707.707l-1 1a.498.498 0 01-.354.146zM11.5 6a.502.502 0 01-.354-.146l-1-1a.5.5 0 01.707-.707l1 1a.5.5 0 01-.354.853z"
  })));
}
LiniAmbulance.propTypes = {
  size: PropTypes.number.isRequired
};