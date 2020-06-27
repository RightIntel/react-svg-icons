import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSignal0({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSignal0';

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
    d: "M18.5 19h-2a.5.5 0 010-1h2a.5.5 0 010 1zM14.5 19h-2a.5.5 0 010-1h2a.5.5 0 010 1zM10.5 19h-2a.5.5 0 010-1h2a.5.5 0 010 1zM6.5 19h-2a.5.5 0 010-1h2a.5.5 0 010 1zM2.5 19h-2a.5.5 0 010-1h2a.5.5 0 010 1z"
  })));
}
LiniSignal0.propTypes = {
  size: PropTypes.number.isRequired
};