function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHammer({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHammer';

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
    d: "M18.596 14.457l-9.52-8.655a.45.45 0 01-.015-.657l2.293-2.293A.499.499 0 0011 1.998c-.041 0-1.027.001-2.092.063-2.034.12-2.53.351-2.762.583l-3.5 3.5a.5.5 0 00-.146.354v.5H2a.504.504 0 00-.354.146l-1 1a.5.5 0 000 .707l2 2a.5.5 0 00.707 0l1-1a.5.5 0 00.146-.354v-.5h.5c.133 0 .26-.053.354-.146l.793-.793a.452.452 0 01.321-.136c.127 0 .246.054.335.151l8.655 9.52a1.442 1.442 0 002.103.05l1.086-1.086a1.445 1.445 0 00-.05-2.103zM6.467 6.925c-.387 0-.752.152-1.028.429L4.793 8H4a.5.5 0 00-.5.5v.793l-.5.5L1.707 8.5l.5-.5H3a.5.5 0 00.5-.5v-.793l3.34-3.34c.063-.036.46-.213 2.223-.311.244-.014.483-.024.706-.032L8.354 4.439a1.445 1.445 0 00.05 2.103l.872.793-.94.94-.793-.872a1.46 1.46 0 00-1.075-.479zm11.472 8.929l-1.086 1.086a.452.452 0 01-.321.136.452.452 0 01-.335-.151L9.009 9.018l1.008-1.008 7.907 7.188a.45.45 0 01.015.657z"
  })));
}
LiniHammer.propTypes = {
  size: PropTypes.number.isRequired
};