import React from 'react';
import PropTypes from 'prop-types';
export default function LiniArrowRightSquare({
  size,
  ...props
}) {
  let className = 'Component Lini LiniArrowRightSquare';

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
    d: "M0 2.5v16c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1.5v-16c0-.827-.673-1.5-1.5-1.5h-16C.673 1 0 1.673 0 2.5zm18 16a.5.5 0 01-.5.5h-16a.5.5 0 01-.5-.5v-16a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.354 7.146l3 3a.5.5 0 010 .707l-3 3a.5.5 0 01-.707-.707L12.793 11H4.5a.5.5 0 010-1h8.293l-2.146-2.146a.498.498 0 010-.708.5.5 0 01.707 0z"
  })));
}
LiniArrowRightSquare.propTypes = {
  size: PropTypes.number.isRequired
};