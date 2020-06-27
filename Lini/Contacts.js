import React from 'react';
import PropTypes from 'prop-types';
export default function LiniContacts({
  size,
  ...props
}) {
  let className = 'Component Lini LiniContacts';

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
    d: "M16.5 1h-13C2.673 1 2 1.673 2 2.5V4h-.5a.5.5 0 000 1H2v1h-.5a.5.5 0 000 1H2v1h-.5a.5.5 0 000 1H2v1h-.5a.5.5 0 000 1H2v1h-.5a.5.5 0 000 1H2v1h-.5a.5.5 0 000 1H2v1h-.5a.5.5 0 000 1H2v1.5c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5v-16c0-.827-.673-1.5-1.5-1.5zm.5 17.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V17h1.5a.5.5 0 000-1H3v-1h1.5a.5.5 0 000-1H3v-1h1.5a.5.5 0 000-1H3v-1h1.5a.5.5 0 000-1H3V9h1.5a.5.5 0 000-1H3V7h1.5a.5.5 0 000-1H3V5h1.5a.5.5 0 000-1H3V2.5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.114 15.129h-.001c-.992 0-3.346-.015-3.769-.154-.432-.142-.65-.622-.554-1.223.103-.647.533-1.324 1.149-1.811.542-.428 1.513-.939 3.06-.94h.005c1.214 0 2.264.318 3.037.921.623.486 1.046 1.139 1.16 1.793.106.609-.103 1.102-.532 1.256-.12.043-.332.092-1.342.127-.596.021-1.382.032-2.213.032zM7.767 14.04c.423.046 1.677.089 3.347.089h.001c1.783 0 2.771-.047 3.116-.086.003-.141-.049-.434-.28-.779C13.634 12.792 12.83 12 11.006 12h-.004c-1.818.001-2.626.791-2.946 1.262-.232.342-.288.634-.287.777zM11 10c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"
  })));
}
LiniContacts.propTypes = {
  size: PropTypes.number.isRequired
};