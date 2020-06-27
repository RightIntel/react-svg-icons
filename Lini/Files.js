function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFiles({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFiles';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.5 4H16v-.5c0-.827-.673-1.5-1.5-1.5H14v-.5c0-.827-.673-1.5-1.5-1.5H5a.504.504 0 00-.354.146l-3.5 3.5A.5.5 0 001 4v10.5c0 .827.673 1.5 1.5 1.5H3v.5c0 .827.673 1.5 1.5 1.5H5v.5c0 .827.673 1.5 1.5 1.5h10c.827 0 1.5-.673 1.5-1.5v-13c0-.827-.673-1.5-1.5-1.5zM5 1.207V3.5a.5.5 0 01-.5.5H2.207L5 1.207zM2 14.5V5h2.5C5.327 5 6 4.327 6 3.5V1h6.5a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5zm2 2V16h8.5c.827 0 1.5-.673 1.5-1.5V3h.5a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5zm13 2a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5V18h8.5c.827 0 1.5-.673 1.5-1.5V5h.5a.5.5 0 01.5.5v13z"
  })));
}
LiniFiles.propTypes = {
  size: PropTypes.number.isRequired
};