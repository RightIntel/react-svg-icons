function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBottle({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBottle';

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
    d: "M14 5.5c0-.723-.453-1.57-1.055-1.971l-1.062-.708A.498.498 0 0012 2.5v-2a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5v2c0 .122.044.234.117.321l-1.062.708C5.454 3.93 5 4.777 5 5.5v1c0 .384.145.734.383 1a1.494 1.494 0 000 2 1.494 1.494 0 000 2 1.494 1.494 0 000 2 1.494 1.494 0 000 2 1.494 1.494 0 00-.383 1v2c0 .827.673 1.5 1.5 1.5h6c.827 0 1.5-.673 1.5-1.5v-2c0-.384-.145-.734-.383-1a1.494 1.494 0 000-2 1.494 1.494 0 000-2 1.494 1.494 0 000-2 1.494 1.494 0 000-2c.238-.266.383-.616.383-1v-1zM8 1h3v1H8V1zM6 5.5c0-.383.29-.926.609-1.139L8.651 3h1.697l2.042 1.361c.319.213.609.755.609 1.139v1a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-1zm7 3a.5.5 0 01-.5.5h-6a.5.5 0 010-1h6a.5.5 0 01.5.5zm0 2a.5.5 0 01-.5.5h-6a.5.5 0 010-1h6a.5.5 0 01.5.5zm0 2a.5.5 0 01-.5.5h-6a.5.5 0 010-1h6a.5.5 0 01.5.5zm0 2a.5.5 0 01-.5.5h-6a.5.5 0 010-1h6a.5.5 0 01.5.5zm0 4a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h6a.5.5 0 01.5.5v2z"
  })));
}
LiniBottle.propTypes = {
  size: PropTypes.number.isRequired
};