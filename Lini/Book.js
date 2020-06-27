function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBook({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBook';

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
    d: "M18.854 4.646C18.095 3.886 16.368 3 14 3c-2.052 0-3.623.667-4.5 1.339C8.623 3.667 7.052 3 5 3 2.633 3 .906 3.887.146 4.646A.5.5 0 000 5v11a.5.5 0 00.854.354C1.357 15.851 2.796 15 5 15s3.644.851 4.146 1.354a.5.5 0 00.707 0c.503-.503 1.942-1.354 4.146-1.354s3.644.851 4.146 1.354a.498.498 0 00.545.108.5.5 0 00.309-.462V5a.504.504 0 00-.146-.354zM1 15.004V5.221c.604-.506 1.981-1.22 4-1.22s3.397.714 4 1.221v9.783c-.918-.542-2.292-1.004-4-1.004s-3.082.461-4 1.004zm17 0C17.082 14.462 15.707 14 14 14s-3.082.462-4 1.004V5.221C10.603 4.715 11.98 4 14 4s3.396.714 4 1.22v9.783z"
  })));
}
LiniBook.propTypes = {
  size: PropTypes.number.isRequired
};