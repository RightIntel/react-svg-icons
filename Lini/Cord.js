import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCord({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCord';

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
    d: "M18.756 17.15a.5.5 0 00-.707-.007A6.462 6.462 0 0113.5 19a6.508 6.508 0 01-6.483-6.03A4.506 4.506 0 0011 8.5V5h.5a.5.5 0 000-1H9V.5a.5.5 0 00-1 0V4H5V.5a.5.5 0 00-1 0V4H1.5a.5.5 0 000 1H2v3.5a4.506 4.506 0 004.015 4.474 7.44 7.44 0 002.182 4.829A7.45 7.45 0 0013.5 20a7.456 7.456 0 005.249-2.143.5.5 0 00.007-.707zM3 8.5V5h7v3.5c0 1.93-1.57 3.5-3.5 3.5S3 10.43 3 8.5z"
  })));
}
LiniCord.propTypes = {
  size: PropTypes.number.isRequired
};