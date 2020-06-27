function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBarcode3({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBarcode3';

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
    d: "M0 3h1v12H0V3zM16 3h.5v11H16V3zM3.5 3H4v11h-.5V3zM12 3h1v11h-1V3zM2 3h1v11H2V3zM7.5 3H8v11h-.5V3zM6 3h1v11H6V3zM19.5 3h.5v12h-.5V3zM17 3h1v11h-1V3zM8.5 3H9v11h-.5V3zM10 3h1v11h-1V3zM3.5 14.5v.5h1v.5h-1V17H5v-.5H4V16h1v-1.5zM2 14.5h.5V17H2v-2.5zM6 14.5v.5h1v.5H6V17h1.5v-.5h-1V16h1v-1.5zM9.5 14.5v1H9v-1h-.5V16h1v1h.5v-2.5zM11 14.5v.5h1v.5h-1v.5h1v.5h-1v.5h1.5v-2.5zM15 15v-.5h-1.5V16h1v.5h-1v.5H15v-1.5h-1V15zM16 14.5h.5V17H16v-2.5zM19 15v-.5h-1.5V17H19v-1.5h-1V15h1zm-.5 1v.5H18V16h.5z"
  })));
}
LiniBarcode3.propTypes = {
  size: PropTypes.number.isRequired
};