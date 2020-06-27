import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCross({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCross';

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
    d: "M10.707 10.5l5.646-5.646a.5.5 0 00-.707-.707L10 9.793 4.354 4.147a.5.5 0 00-.707.707L9.293 10.5l-5.646 5.646a.5.5 0 00.708.707l5.646-5.646 5.646 5.646a.498.498 0 00.708 0 .5.5 0 000-.707L10.709 10.5z"
  })));
}
LiniCross.propTypes = {
  size: PropTypes.number.isRequired
};