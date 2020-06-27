import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMapMarkerCheck({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMapMarkerCheck';

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
    d: "M10 20a.5.5 0 01-.393-.191c-.057-.073-1.418-1.814-2.797-4.385-.812-1.513-1.46-2.999-1.925-4.416C4.298 9.221 4.001 7.536 4.001 6c0-3.308 2.692-6 6-6 1.244 0 2.437.377 3.451 1.091a.5.5 0 11-.576.818A4.97 4.97 0 0010.001 1c-2.757 0-5 2.243-5 5 0 3.254 1.463 6.664 2.691 8.951a34.411 34.411 0 002.309 3.71 34.276 34.276 0 002.214-3.533c1.192-2.19 2.642-5.468 2.776-8.649a.5.5 0 11.999.042c-.063 1.498-.399 3.132-.998 4.855a28.384 28.384 0 01-1.908 4.246c-1.343 2.464-2.636 4.118-2.69 4.187a.5.5 0 01-.393.191z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 9a.502.502 0 01-.354-.146l-2.5-2.5a.5.5 0 01.707-.707l2.146 2.146 5.146-5.146a.5.5 0 01.707.707l-5.5 5.5A.498.498 0 019.998 9z"
  })));
}
LiniMapMarkerCheck.propTypes = {
  size: PropTypes.number.isRequired
};