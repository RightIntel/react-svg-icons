function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEnvelopeOpen({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEnvelopeOpen';

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
    d: "M17.907 5.552l-7.293-4.457C10.31.909 9.914.807 9.5.807s-.81.102-1.114.288L1.093 5.552C.47 5.933 0 6.77 0 7.5v9c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1.5v-9c0-.73-.47-1.567-1.093-1.948zm-16.293.853l7.293-4.457c.147-.09.363-.142.593-.142s.445.052.593.142l7.293 4.457c.155.095.304.266.416.459l-7.747 5.165c-.29.193-.819.193-1.109 0L1.199 6.864c.112-.194.261-.365.416-.459zM17.5 17h-16a.5.5 0 01-.5-.5V7.934l7.391 4.927c.311.207.71.311 1.109.311s.798-.104 1.109-.311L18 7.934V16.5a.5.5 0 01-.5.5z"
  })));
}
LiniEnvelopeOpen.propTypes = {
  size: PropTypes.number.isRequired
};