import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFlashlight({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFlashlight';

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
    d: "M13.5 0h-8C4.673 0 4 .673 4 1.5v2c0 .627.22 1.557.5 2.118l1.106 2.211C5.816 8.249 6 9.03 6 9.5v8C6 18.878 7.122 20 8.5 20h2c1.378 0 2.5-1.122 2.5-2.5v-8c0-.47.184-1.251.394-1.671L14.5 5.618c.28-.561.5-1.491.5-2.118v-2c0-.827-.673-1.5-1.5-1.5zm-8 1h8a.5.5 0 01.5.5V2H5v-.5a.5.5 0 01.5-.5zm8.106 4.171L12.5 7.382c-.28.561-.5 1.491-.5 2.118v8c0 .827-.673 1.5-1.5 1.5h-2c-.827 0-1.5-.673-1.5-1.5v-8c0-.627-.22-1.557-.5-2.118L5.394 5.171C5.184 4.751 5 3.97 5 3.5V3h9v.5c0 .47-.184 1.251-.394 1.671z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 13c-.827 0-1.5-.673-1.5-1.5S8.673 10 9.5 10s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  })));
}
LiniFlashlight.propTypes = {
  size: PropTypes.number.isRequired
};