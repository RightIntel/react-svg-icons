import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPointerRight2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPointerRight2';

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
    d: "M3.5 15a.5.5 0 110-1 .5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 17a1.502 1.502 0 001.394-2.053 1.501 1.501 0 001-2A1.502 1.502 0 0013.914 11H16.5c.827 0 1.5-.673 1.5-1.5S17.327 8 16.5 8h-5.966l1.113-1.406c.241-.304.361-.695.339-1.098s-.186-.779-.46-1.053a1.508 1.508 0 00-2.12-.003L5.883 7.919A1.501 1.501 0 004.5 7h-2C1.673 7 1 7.673 1 8.5v7c0 .827.673 1.5 1.5 1.5h2a1.5 1.5 0 001.28-.719c.636.328 1.798.719 3.72.719h1zm.318-11.85a.653.653 0 01.044.823L9.108 8.189a.499.499 0 00.392.81h7a.5.5 0 010 1h-5a.5.5 0 000 1h1a.5.5 0 010 1h-1a.5.5 0 000 1 .5.5 0 010 1h-1a.5.5 0 000 1 .5.5 0 010 1h-1c-2.102 0-3.139-.516-3.5-.748V9.208l4.108-4.057a.512.512 0 01.71-.002zM2.5 16a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-2z"
  })));
}
LiniPointerRight2.propTypes = {
  size: PropTypes.number.isRequired
};