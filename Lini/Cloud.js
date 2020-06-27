function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCloud({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCloud';

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
    d: "M16.006 16H6c-3.308 0-6-2.692-6-6s2.692-6 6-6c1.602 0 3.137.643 4.26 1.775A3.014 3.014 0 0113 4a3.004 3.004 0 012.822 4.017A3.999 3.999 0 0120 12.007a3.999 3.999 0 01-3.994 3.994zM6 5c-2.757 0-5 2.243-5 5s2.243 5 5 5h10.006C17.657 15 19 13.657 19 12.006a2.997 2.997 0 00-4.02-2.814.5.5 0 01-.534-.814c.357-.376.554-.865.554-1.379 0-1.103-.897-2-2-2-.642 0-1.229.297-1.61.814-.23.312-.365.678-.388 1.057a.5.5 0 01-.908.257A5.008 5.008 0 006 4.999z"
  })));
}
LiniCloud.propTypes = {
  size: PropTypes.number.isRequired
};