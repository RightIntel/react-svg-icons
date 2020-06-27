function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPalette({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPalette';

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
    d: "M6.5 8C5.673 8 5 7.327 5 6.5S5.673 5 6.5 5 8 5.673 8 6.5 7.327 8 6.5 8zm0-2a.5.5 0 100 1 .5.5 0 000-1zM3.5 11C2.673 11 2 10.327 2 9.5S2.673 8 3.5 8 5 8.673 5 9.5 4.327 11 3.5 11zm0-2a.5.5 0 100 1 .5.5 0 000-1zM10.5 7C9.673 7 9 6.327 9 5.5S9.673 4 10.5 4s1.5.673 1.5 1.5S11.327 7 10.5 7zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 19c-2.655 0-5.155-.874-7.04-2.461a8.543 8.543 0 01-2.161-2.701c-.531-1.057-.8-2.18-.8-3.338s.269-2.282.8-3.338A8.543 8.543 0 012.96 4.461C4.844 2.874 7.344 2 10 2s5.155.874 7.04 2.461a8.543 8.543 0 012.161 2.701c.531 1.057.8 2.18.8 3.338 0 1.852-.825 2.512-1.597 2.512-.645 0-1.309-.452-1.822-1.239-.324-.497-.666-.771-.963-.771a.576.576 0 00-.299.091c-.562.336-.23 1.245.018 1.756.802 1.654.868 3.098.192 4.178-.82 1.31-2.681 1.974-5.53 1.974zm0-16c-4.963 0-9 3.364-9 7.5S5.037 18 10 18c1.366 0 2.474-.159 3.293-.473.649-.249 1.117-.596 1.39-1.032.611-.976.204-2.284-.245-3.21-.96-1.98-.063-2.793.368-3.051a1.57 1.57 0 01.813-.233c.458 0 1.142.213 1.801 1.226.377.579.766.785.984.785.357 0 .597-.608.597-1.512 0-4.136-4.037-7.5-9-7.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 16c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"
  })));
}
LiniPalette.propTypes = {
  size: PropTypes.number.isRequired
};