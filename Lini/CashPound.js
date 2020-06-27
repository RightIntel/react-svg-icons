function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCashPound({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCashPound';

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
    d: "M18.5 18H.5a.5.5 0 01-.5-.5v-10A.5.5 0 01.5 7h18a.5.5 0 01.5.5v10a.5.5 0 01-.5.5zM1 17h17V8H1v9zM17.5 6h-16a.5.5 0 010-1h16a.5.5 0 010 1zM16.5 4h-14a.5.5 0 010-1h14a.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 15H8v-2h1.5a.5.5 0 000-1H8v-.5c0-.799.763-1.5 1.634-1.5.579 0 1.182.316 1.433.75a.499.499 0 10.865-.501C11.506 9.513 10.561 9 9.633 9a2.73 2.73 0 00-1.819.717c-.526.481-.815 1.114-.815 1.783v.5h-.5a.5.5 0 000 1h.5v2.5a.5.5 0 00.5.5h4a.5.5 0 000-1z"
  })));
}
LiniCashPound.propTypes = {
  size: PropTypes.number.isRequired
};