function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniRank3({
  size,
  ...props
}) {
  let className = 'Component Lini LiniRank3';

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
    d: "M18.5 16a.494.494 0 01-.242-.063l-8.757-4.865-8.757 4.865a.5.5 0 01-.486-.874l9-5a.5.5 0 01.486 0l9 5A.5.5 0 0118.5 16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 13a.494.494 0 01-.242-.063L9.501 8.072.744 12.937a.5.5 0 01-.486-.874l9-5a.5.5 0 01.486 0l9 5A.5.5 0 0118.5 13z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 10a.494.494 0 01-.242-.063L9.501 5.072.744 9.937a.5.5 0 01-.486-.874l9-5a.5.5 0 01.486 0l9 5A.5.5 0 0118.5 10z"
  })));
}
LiniRank3.propTypes = {
  size: PropTypes.number.isRequired
};