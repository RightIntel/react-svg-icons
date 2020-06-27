import React from 'react';
import PropTypes from 'prop-types';
export default function LiniExitLeft2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniExitLeft2';

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
    d: "M19 2.5v16c0 .827-.673 1.5-1.5 1.5h-1c-.827 0-1.5-.673-1.5-1.5v-6a.5.5 0 011 0v6a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v6a.5.5 0 01-1 0v-6c0-.827.673-1.5 1.5-1.5h1c.827 0 1.5.673 1.5 1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.354 5.146a.5.5 0 010 .707L2.208 9.999h14.293a.5.5 0 010 1H2.208l4.146 4.146a.5.5 0 01-.707.707l-5-5a.498.498 0 010-.708l5-5a.5.5 0 01.707 0z"
  })));
}
LiniExitLeft2.propTypes = {
  size: PropTypes.number.isRequired
};