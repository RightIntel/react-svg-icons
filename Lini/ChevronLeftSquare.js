import React from 'react';
import PropTypes from 'prop-types';
export default function LiniChevronLeftSquare({
  size,
  ...props
}) {
  let className = 'Component Lini LiniChevronLeftSquare';

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
    d: "M19 18.5v-16c0-.827-.673-1.5-1.5-1.5h-16C.673 1 0 1.673 0 2.5v16c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1.5zM1 2.5a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v16a.5.5 0 01-.5.5h-16a.5.5 0 01-.5-.5v-16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 15.5a.502.502 0 00-.146-.354L7.708 10.5l4.646-4.646a.5.5 0 00-.707-.707l-5 5a.5.5 0 000 .707l5 5a.5.5 0 00.853-.354z"
  })));
}
LiniChevronLeftSquare.propTypes = {
  size: PropTypes.number.isRequired
};