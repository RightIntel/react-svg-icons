import React from 'react';
import PropTypes from 'prop-types';
export default function LiniChevronDown({
  size,
  ...props
}) {
  let className = 'Component Lini LiniChevronDown';

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
    d: "M0 6a.5.5 0 01.853-.354l8.646 8.646 8.646-8.646a.5.5 0 01.707.707l-9 9a.5.5 0 01-.707 0l-9-9a.498.498 0 01-.146-.354z"
  })));
}
LiniChevronDown.propTypes = {
  size: PropTypes.number.isRequired
};