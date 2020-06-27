import React from 'react';
import PropTypes from 'prop-types';
export default function LiniStamp({
  size,
  ...props
}) {
  let className = 'Component Lini LiniStamp';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.5 20h-16a.5.5 0 010-1h16a.5.5 0 010 1zM17.5 14H13c-.542 0-1-.687-1-1.5V7.463A4.003 4.003 0 0014 4c0-2.206-1.794-4-4-4S6 1.794 6 4c0 1.478.805 2.77 2 3.463V12.5c0 .813-.458 1.5-1 1.5H1.5c-.827 0-1.5.673-1.5 1.5v1c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1.5v-1c0-.827-.673-1.5-1.5-1.5zM7 4c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm2 8.5V7.873a3.978 3.978 0 002 0V12.5c0 .562.149 1.082.401 1.5H8.599c.252-.418.401-.938.401-1.5zm9 4a.5.5 0 01-.5.5h-16a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 4a.5.5 0 01-.472-.667c.201-.568.737-1.104 1.305-1.305a.5.5 0 11.333.943c-.283.1-.595.412-.695.695A.5.5 0 018.5 4z"
  })));
}
LiniStamp.propTypes = {
  size: PropTypes.number.isRequired
};