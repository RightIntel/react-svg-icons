import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPencil2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPencil2';

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
    d: "M.5 20a.499.499 0 01-.47-.67l2-5.5a.51.51 0 01.116-.183l13.5-13.5a.5.5 0 01.707 0l3.5 3.5a.5.5 0 010 .707l-13.5 13.5a.496.496 0 01-.183.116l-5.5 2a.505.505 0 01-.171.03zm2.432-5.725l-1.596 4.389 4.389-1.596L18.793 4 16 1.207 2.932 14.275z"
  })));
}
LiniPencil2.propTypes = {
  size: PropTypes.number.isRequired
};