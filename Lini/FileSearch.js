import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFileSearch({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFileSearch';

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
    d: "M14.882 17.177l-2.938-3.472A3.987 3.987 0 0013 11c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4c.804 0 1.553-.239 2.181-.648l2.937 3.471a.499.499 0 00.705.059.5.5 0 00.059-.705zM6 11c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z"
  })));
}
LiniFileSearch.propTypes = {
  size: PropTypes.number.isRequired
};