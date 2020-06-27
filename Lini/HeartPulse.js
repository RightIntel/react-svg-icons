function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHeartPulse({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHeartPulse';

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
    d: "M9.5 19a.5.5 0 01-.243-.063c-.116-.065-2.877-1.611-5.369-4.082a.5.5 0 01.704-.71c1.979 1.962 4.186 3.346 4.908 3.776.723-.431 2.932-1.817 4.908-3.776a.5.5 0 01.704.71c-2.493 2.471-5.253 4.017-5.369 4.082A.5.5 0 019.5 19zM1.279 11a.5.5 0 01-.453-.287C.278 9.548 0 8.383 0 7.25A5.256 5.256 0 015.25 2c.98 0 2.021.367 2.931 1.034.532.39.985.86 1.319 1.359a5.522 5.522 0 011.319-1.359C11.729 2.367 12.77 2 13.75 2A5.256 5.256 0 0119 7.25c0 1.133-.278 2.298-.826 3.463a.5.5 0 01-.905-.425c.485-1.031.731-2.053.731-3.037a4.255 4.255 0 00-4.25-4.25c-1.703 0-3.357 1.401-3.776 2.658a.5.5 0 01-.948 0C8.607 4.402 6.953 3.001 5.25 3.001A4.255 4.255 0 001 7.251c0 .984.246 2.006.731 3.037a.5.5 0 01-.452.713z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.515 15h-.013c-.202-.004-.569-.109-.753-.766L8.532 9.9l-.807 3.279c-.158.643-.525.778-.73.8s-.592-.027-.889-.62L5.5 12.148a.547.547 0 00-.076-.117l-.011.015c-.37.543-1.192.953-1.913.953h-1a.5.5 0 010-1h1c.421 0 .921-.272 1.087-.516.223-.327.547-.501.891-.478.374.025.708.279.917.696l.445.89.936-3.803c.158-.64.482-.779.726-.783s.572.125.751.76l1.284 4.576 1.178-3.608c.205-.628.582-.736.788-.745s.59.068.847.677l.724 1.719c.136.322.578.616.927.616h1.5a.5.5 0 010 1h-1.5c-.747 0-1.559-.539-1.849-1.228l-.592-1.406-1.274 3.9c-.207.634-.566.733-.771.733z"
  })));
}
LiniHeartPulse.propTypes = {
  size: PropTypes.number.isRequired
};