import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEnter({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEnter';

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
    d: "M17.5 2h-9C7.673 2 7 2.673 7 3.5v3a.5.5 0 001 0v-3a.5.5 0 01.5-.5h7.564l-3.842 1.647C11.537 4.941 11 5.755 11 6.5V16H8.5a.5.5 0 01-.5-.5v-3a.5.5 0 00-1 0v3c0 .827.673 1.5 1.5 1.5H11v1.5c0 .433.18.801.495 1.008.174.114.376.172.589.172.173 0 .354-.038.532-.114l5.162-2.212C18.463 17.06 19 16.246 19 15.5v-12c0-.827-.673-1.5-1.5-1.5zm.5 13.5c0 .351-.294.796-.616.934l-5.162 2.212c-.096.041-.159.038-.177.027S12 18.604 12 18.5v-12c0-.351.294-.796.616-.934l5.333-2.286A.491.491 0 0118 3.5v12z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.354 9.146l-3-3a.5.5 0 00-.707.707l2.146 2.146H.5a.5.5 0 000 1h6.293l-2.146 2.146a.5.5 0 00.708.707l3-3a.5.5 0 000-.707z"
  })));
}
LiniEnter.propTypes = {
  size: PropTypes.number.isRequired
};