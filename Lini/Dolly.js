import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDolly({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDolly';

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
    d: "M16.5 20h-10a.5.5 0 010-1h10a.5.5 0 00.5-.5v-1a.5.5 0 011 0v1c0 .827-.673 1.5-1.5 1.5zM5.5 15a.5.5 0 01-.5-.5v-11C5 2.673 4.327 2 3.5 2h-2a.5.5 0 010-1h2C4.878 1 6 2.122 6 3.5v11a.5.5 0 01-.5.5zM4 17.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 20C2.122 20 1 18.878 1 17.5S2.122 15 3.5 15 6 16.122 6 17.5 4.878 20 3.5 20zm0-4c-.827 0-1.5.673-1.5 1.5S2.673 19 3.5 19 5 18.327 5 17.5 4.327 16 3.5 16zM14.5 9h-.586c.056-.157.086-.325.086-.5v-3c0-.827-.673-1.5-1.5-1.5h-4C7.673 4 7 4.673 7 5.5v3c0 .384.145.734.383 1a1.494 1.494 0 00-.383 1v6c0 .827.673 1.5 1.5 1.5h6c.827 0 1.5-.673 1.5-1.5v-6c0-.827-.673-1.5-1.5-1.5zM12 10v7h-1v-7h1zM8 5.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-3zm0 11v-6a.5.5 0 01.5-.5H10v7H8.5a.5.5 0 01-.5-.5zm7 0a.5.5 0 01-.5.5H13v-7h1.5a.5.5 0 01.5.5v6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 7h-1a.5.5 0 010-1h1a.5.5 0 010 1z"
  })));
}
LiniDolly.propTypes = {
  size: PropTypes.number.isRequired
};