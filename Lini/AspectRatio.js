function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniAspectRatio({
  size,
  ...props
}) {
  let className = 'Component Lini LiniAspectRatio';

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
    d: "M17.5 2h-16C.673 2 0 2.673 0 3.5v10c0 .827.673 1.5 1.5 1.5H9v2H5.5a.5.5 0 000 1h8a.5.5 0 000-1H10v-2h7.5c.827 0 1.5-.673 1.5-1.5v-10c0-.827-.673-1.5-1.5-1.5zm.5 11.5a.5.5 0 01-.5.5h-16a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 6.5c0-.827-.673-1.5-1.5-1.5h-3a.5.5 0 000 1h3a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-3a.5.5 0 000 1h3a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-3a.5.5 0 000 1h3c.827 0 1.5-.673 1.5-1.5v-1c0-.384-.145-.734-.383-1 .238-.266.383-.616.383-1v-1zM7.5 5a.5.5 0 00-.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2a.5.5 0 00-1 0v2C3 8.327 3.673 9 4.5 9h2c.175 0 .343-.031.5-.086V11.5a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.5 8a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM9.5 11a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5z"
  })));
}
LiniAspectRatio.propTypes = {
  size: PropTypes.number.isRequired
};