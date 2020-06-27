function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniAlignCenterHorizontal({
  size,
  ...props
}) {
  let className = 'Component Lini LiniAlignCenterHorizontal';

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
    d: "M19.5 10H18V6.5c0-.827-.673-1.5-1.5-1.5h-4c-.827 0-1.5.673-1.5 1.5V10H9V3.5C9 2.673 8.327 2 7.5 2h-4C2.673 2 2 2.673 2 3.5V10H.5a.5.5 0 000 1H2v6.5c0 .827.673 1.5 1.5 1.5h4c.827 0 1.5-.673 1.5-1.5V11h2v3.5c0 .827.673 1.5 1.5 1.5h4c.827 0 1.5-.673 1.5-1.5V11h1.5a.5.5 0 000-1zM12 6.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5V10h-5V6.5zm-9-3a.5.5 0 01.5-.5h4a.5.5 0 01.5.5V10H3V3.5zm5 14a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V11h5v6.5zm9-3a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V11h5v3.5z"
  })));
}
LiniAlignCenterHorizontal.propTypes = {
  size: PropTypes.number.isRequired
};