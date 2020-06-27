import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFileCheck({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFileCheck';

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
    d: "M17.854 5.646l-4.5-4.5A.5.5 0 0013 1H3.5C2.673 1 2 1.673 2 2.5v16c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5V6a.504.504 0 00-.146-.354zM16.793 6H13.5a.5.5 0 01-.5-.5V2.207L16.793 6zM16.5 19h-13a.5.5 0 01-.5-.5v-16a.5.5 0 01.5-.5H12v3.5c0 .827.673 1.5 1.5 1.5H17v11.5a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 16.5a.502.502 0 01-.354-.146l-2-2a.5.5 0 01.707-.707l1.646 1.646 4.646-4.646a.5.5 0 01.707.707l-5 5a.498.498 0 01-.354.146z"
  })));
}
LiniFileCheck.propTypes = {
  size: PropTypes.number.isRequired
};