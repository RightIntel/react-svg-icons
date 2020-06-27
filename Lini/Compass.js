import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCompass({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCompass';

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
    d: "M10.5 13h-2a.5.5 0 010-1h2a.5.5 0 010 1zM15.5 11a.5.5 0 00-.5.5v.5h-1a.5.5 0 000 1h1v.5a.5.5 0 001 0v-2a.5.5 0 00-.5-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.971 18.332L10.795 6.639A2.508 2.508 0 0012 4.5c0-1.207-.86-2.217-2-2.45V1h.5a.5.5 0 000-1h-2a.5.5 0 000 1H9v1.05c-1.14.232-2 1.242-2 2.45 0 .884.469 1.692 1.205 2.139L4.029 18.332A.507.507 0 004 18.5v1a.5.5 0 001 0v-.913l4.5-12.6 4.5 12.6v.913a.5.5 0 001 0v-1a.507.507 0 00-.029-.168zM9.5 4a.5.5 0 00-.471.332l-.476 1.332A1.502 1.502 0 019.5 3a1.502 1.502 0 01.946 2.664L9.97 4.332A.5.5 0 009.499 4z"
  })));
}
LiniCompass.propTypes = {
  size: PropTypes.number.isRequired
};