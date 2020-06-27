import React from 'react';
import PropTypes from 'prop-types';
export default function LiniReturn2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniReturn2';

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
    d: "M17.071 2.929A9.934 9.934 0 0010 0a9.996 9.996 0 00-7.853 3.807V2.5a.5.5 0 00-1 0v2.972a.5.5 0 00.661.474l1.353-.461 1.5-.511a.5.5 0 00-.322-.946l-1.49.508A8.998 8.998 0 0110 1.002c4.963 0 9 4.037 9 9s-4.037 9-9 9a8.995 8.995 0 01-7.928-4.737.5.5 0 10-.88.474 9.997 9.997 0 008.809 5.263c2.671 0 5.182-1.04 7.071-2.929s2.929-4.4 2.929-7.071a9.934 9.934 0 00-2.929-7.071z"
  })));
}
LiniReturn2.propTypes = {
  size: PropTypes.number.isRequired
};