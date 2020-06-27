function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFeather2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFeather2';

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
    d: "M.5 20l-.027-.001A.5.5 0 010 19.484c.118-3.655 1.096-6.94 2.907-9.762 1.487-2.317 3.53-4.321 6.072-5.955 2.426-1.559 4.83-2.468 6.421-2.956C17.227.251 18.775 0 19.5 0a.5.5 0 010 1c-1.166 0-5.697.855-9.98 3.608-1.885 1.212-3.965 2.963-5.6 5.419.567-.356 1.219-.581 1.971-.681.953-.127 1.955-.044 2.924.036 1.457.121 2.833.235 3.96-.329 1.866-.933 3.309-2.834 3.324-2.853a.5.5 0 11.8.601c-.064.086-1.595 2.106-3.676 3.147-1.377.689-2.959.558-4.489.431-1.855-.154-3.607-.299-4.881.975-2.392 2.392-2.851 8.126-2.855 8.184A.5.5 0 01.5 20z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 6a.501.501 0 01-.199-.959C13.272 4.186 17.737 3 18.5 3a.5.5 0 010 1c-.528 0-4.793 1.088-6.801 1.959A.5.5 0 0111.5 6z"
  })));
}
LiniFeather2.propTypes = {
  size: PropTypes.number.isRequired
};