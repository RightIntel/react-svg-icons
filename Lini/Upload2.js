import React from 'react';
import PropTypes from 'prop-types';
export default function LiniUpload2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniUpload2';

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
    d: "M17.5 19h-16C.673 19 0 18.327 0 17.5v-2a.5.5 0 011 0v2a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-2a.5.5 0 011 0v2c0 .827-.673 1.5-1.5 1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.854 8.646l-5-5a.5.5 0 00-.707 0l-5 5a.5.5 0 00.707.707L9 5.207V15.5a.5.5 0 001 0V5.207l4.146 4.146a.498.498 0 00.708 0 .5.5 0 000-.707z"
  })));
}
LiniUpload2.propTypes = {
  size: PropTypes.number.isRequired
};