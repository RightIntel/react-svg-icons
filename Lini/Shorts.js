function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniShorts({
  size,
  ...props
}) {
  let className = 'Component Lini LiniShorts';

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
    d: "M18.968 12.324l-3-8A.5.5 0 0015.5 4h-12a.5.5 0 00-.468.324l-3 8a.5.5 0 00.245.623l6 3a.501.501 0 00.624-.147l2.6-3.467 2.6 3.467a.498.498 0 00.623.147l6-3a.5.5 0 00.245-.623zM3.847 5h11.307l.375 1H3.472l.375-1zm8.803 9.866L9.9 11.2a.5.5 0 00-.8 0l-2.75 3.666-5.224-2.612L3.096 7h4.577a3.451 3.451 0 00-.16.235 4.447 4.447 0 00-.499 1.144.5.5 0 10.97.242C7.988 8.605 8.419 7 9.499 7c1.084 0 1.508 1.595 1.515 1.622a.5.5 0 00.97-.243 4.406 4.406 0 00-.499-1.144 3.451 3.451 0 00-.16-.235h4.577l1.97 5.254-5.224 2.612z"
  })));
}
LiniShorts.propTypes = {
  size: PropTypes.number.isRequired
};