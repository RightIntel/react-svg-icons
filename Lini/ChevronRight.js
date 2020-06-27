import React from 'react';
import PropTypes from 'prop-types';
export default function LiniChevronRight({
  size,
  ...props
}) {
  let className = 'Component Lini LiniChevronRight';

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
    d: "M5 20a.5.5 0 01-.354-.853l8.646-8.646-8.646-8.646a.5.5 0 01.707-.707l9 9a.5.5 0 010 .707l-9 9a.498.498 0 01-.354.146z"
  })));
}
LiniChevronRight.propTypes = {
  size: PropTypes.number.isRequired
};