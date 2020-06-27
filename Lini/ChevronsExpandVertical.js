import React from 'react';
import PropTypes from 'prop-types';
export default function LiniChevronsExpandVertical({
  size,
  ...props
}) {
  let className = 'Component Lini LiniChevronsExpandVertical';

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
    d: "M15.5 7.5a.502.502 0 01-.354-.146L9.5 1.708 3.854 7.354a.5.5 0 01-.707-.707l6-6a.5.5 0 01.707 0l6 6a.5.5 0 01-.354.853zM9.5 19.5a.502.502 0 01-.354-.146l-6-6a.5.5 0 01.707-.707l5.646 5.646 5.646-5.646a.5.5 0 01.707.707l-6 6a.498.498 0 01-.354.146z"
  })));
}
LiniChevronsExpandVertical.propTypes = {
  size: PropTypes.number.isRequired
};