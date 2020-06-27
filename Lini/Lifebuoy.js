function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniLifebuoy({
  size,
  ...props
}) {
  let className = 'Component Lini LiniLifebuoy';

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
    d: "M17.071 2.929C15.182 1.04 12.671 0 10 0S4.818 1.04 2.929 2.929C1.04 4.818 0 7.329 0 10s1.04 5.182 2.929 7.071C4.818 18.96 7.329 20 10 20s5.182-1.04 7.071-2.929C18.96 15.182 20 12.671 20 10s-1.04-5.182-2.929-7.071zM10 15c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm-9-5c0-.338.019-.672.056-1h3.028a5.989 5.989 0 000 2H1.056A9.167 9.167 0 011 10zm14.916-1h3.028a8.923 8.923 0 010 2h-3.028a5.989 5.989 0 000-2zm2.86-1h-3.119A6.033 6.033 0 0012 4.343V1.224A9.03 9.03 0 0118.776 8zM11 1.056v3.028a5.989 5.989 0 00-2 0V1.056a8.923 8.923 0 012 0zm-3 .168v3.119A6.033 6.033 0 004.343 8H1.224A9.03 9.03 0 018 1.224zM1.224 12h3.119A6.033 6.033 0 008 15.657v3.119A9.03 9.03 0 011.224 12zM9 18.944v-3.028a5.989 5.989 0 002 0v3.028a8.923 8.923 0 01-2 0zm3-.168v-3.119A6.033 6.033 0 0015.657 12h3.119A9.03 9.03 0 0112 18.776z"
  })));
}
LiniLifebuoy.propTypes = {
  size: PropTypes.number.isRequired
};