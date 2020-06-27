import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCircle({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCircle';

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
    d: "M10 20c-2.671 0-5.182-1.04-7.071-2.929S0 12.671 0 10c0-2.671 1.04-5.182 2.929-7.071S7.329 0 10 0c2.671 0 5.182 1.04 7.071 2.929S20 7.329 20 10c0 2.671-1.04 5.182-2.929 7.071S12.671 20 10 20zm0-19c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
  })));
}
LiniCircle.propTypes = {
  size: PropTypes.number.isRequired
};