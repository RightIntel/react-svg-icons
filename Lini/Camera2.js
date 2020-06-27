import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCamera2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCamera2';

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
    d: "M9.5 15C7.019 15 5 12.981 5 10.5S7.019 6 9.5 6 14 8.019 14 10.5 11.981 15 9.5 15zm0-8C7.57 7 6 8.57 6 10.5S7.57 14 9.5 14s3.5-1.57 3.5-3.5S11.43 7 9.5 7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 18h-16C.673 18 0 17.327 0 16.5v-10C0 5.673.673 5 1.5 5H3c.415 0 1.06-.267 1.354-.561l.586-.586c.487-.487 1.373-.854 2.061-.854h5c.688 0 1.574.367 2.061.854l.586.586c.293.293.939.561 1.354.561h1.5c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5zM1.5 6a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5H16c-.688 0-1.574-.367-2.061-.854l-.586-.586c-.293-.293-.939-.561-1.354-.561h-5c-.415 0-1.06.267-1.354.561l-.586.586C4.572 5.633 3.687 6 2.998 6h-1.5z"
  })));
}
LiniCamera2.propTypes = {
  size: PropTypes.number.isRequired
};