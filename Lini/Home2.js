function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHome2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHome2';

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
    d: "M.5 12a.498.498 0 01-.37-.835l8.829-9.758c.274-.303.644-.47 1.042-.47.397 0 .767.167 1.042.47l8.829 9.758a.5.5 0 01-.741.671l-8.829-9.758c-.082-.091-.189-.141-.3-.141s-.218.05-.3.141L.873 11.836a.5.5 0 01-.371.165z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 20h-11c-.827 0-1.5-.673-1.5-1.5v-8a.5.5 0 011 0v8a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-8a.5.5 0 011 0v8c0 .827-.673 1.5-1.5 1.5z"
  })));
}
LiniHome2.propTypes = {
  size: PropTypes.number.isRequired
};