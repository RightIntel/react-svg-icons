import React from 'react';
import PropTypes from 'prop-types';
export default function LiniRefresh({
  size,
  ...props
}) {
  let className = 'Component Lini LiniRefresh';

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
    d: "M19.854 8.646a.5.5 0 00-.707 0l-1.149 1.149a7.94 7.94 0 00-2.341-5.452C14.146 2.832 12.137 2 10 2s-4.146.832-5.657 2.343S2 7.863 2 10s.832 4.146 2.343 5.657S7.863 18 10 18a7.988 7.988 0 007.077-4.266.5.5 0 00-.884-.468A6.99 6.99 0 0110 17c-3.86 0-7-3.14-7-7s3.14-7 7-7c3.789 0 6.885 3.027 6.997 6.789l-1.143-1.143a.5.5 0 00-.707.707l2 2a.498.498 0 00.708 0l2-2a.5.5 0 000-.707z"
  })));
}
LiniRefresh.propTypes = {
  size: PropTypes.number.isRequired
};