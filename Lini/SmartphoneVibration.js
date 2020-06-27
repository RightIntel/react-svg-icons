function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSmartphoneVibration({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSmartphoneVibration';

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
    d: "M14.5 20h-9c-.827 0-1.5-.673-1.5-1.5v-17C4 .673 4.673 0 5.5 0h9c.827 0 1.5.673 1.5 1.5v17c0 .827-.673 1.5-1.5 1.5zm-9-19a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5h-9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 16h-7a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v13a.5.5 0 01-.5.5zM7 15h6V3H7v12zM10.5 18h-1a.5.5 0 010-1h1a.5.5 0 010 1zM2.5 18a.5.5 0 01-.448-.277l-1-2a.502.502 0 010-.447L1.94 13.5l-.888-1.776a.502.502 0 010-.447l.888-1.776-.888-1.776a.502.502 0 010-.447l.888-1.776-.888-1.776a.502.502 0 010-.447l1-2a.5.5 0 01.895.447l-.888 1.776.888 1.776c.07.141.07.306 0 .447l-.888 1.776.888 1.776c.07.141.07.306 0 .447L2.059 11.5l.888 1.776c.07.141.07.306 0 .447l-.888 1.776.888 1.776a.5.5 0 01-.447.724zM17.5 18a.5.5 0 01-.447-.724l.888-1.776-.888-1.776a.502.502 0 010-.447l.888-1.776-.888-1.776a.502.502 0 010-.447l.888-1.776-.888-1.776a.502.502 0 010-.447l.888-1.776-.888-1.776a.5.5 0 01.895-.447l1 2c.07.141.07.306 0 .447l-.888 1.776.888 1.776c.07.141.07.306 0 .447l-.888 1.776.888 1.776c.07.141.07.306 0 .447l-.888 1.776.888 1.776c.07.141.07.306 0 .447l-1 2a.503.503 0 01-.448.277z"
  })));
}
LiniSmartphoneVibration.propTypes = {
  size: PropTypes.number.isRequired
};