import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGas({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGas';

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
    d: "M10.5 20h-9C.673 20 0 19.327 0 18.5v-14C0 3.673.673 3 1.5 3h9c.827 0 1.5.673 1.5 1.5v14c0 .827-.673 1.5-1.5 1.5zm-9-16a.5.5 0 00-.5.5v14a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-14a.5.5 0 00-.5-.5h-9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 10h-5C2.673 10 2 9.327 2 8.5v-2C2 5.673 2.673 5 3.5 5h5c.827 0 1.5.673 1.5 1.5v2c0 .827-.673 1.5-1.5 1.5zm-5-4a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-5zM18.146 3.939l-2.293-2.293-.293-.293C15.1.893 14.237.449 13.595.342L11.581.006a.5.5 0 00-.164.986l2.014.336c.414.069 1.025.374 1.36.673l-.438.438a1.501 1.501 0 000 2.121l.586.586c.283.283.659.438 1.061.438s.778-.156 1.061-.438l.437-.437c.27.315.503.903.503 1.29v9.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5v-7c0-.827-.673-1.5-1.5-1.5h-.5v-.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-.5h.5a.5.5 0 01.5.5v7c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5v-9.5c0-.688-.367-1.574-.854-2.061zM16 4.585a.5.5 0 01-.354-.145l-.586-.586a.5.5 0 010-.707l.439-.439 1.293 1.293-.439.439a.495.495 0 01-.354.145z"
  })));
}
LiniGas.propTypes = {
  size: PropTypes.number.isRequired
};