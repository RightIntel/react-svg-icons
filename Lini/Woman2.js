function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniWoman2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniWoman2';

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
    d: "M9.5 5C8.122 5 7 3.878 7 2.5S8.122 0 9.5 0 12 1.122 12 2.5 10.878 5 9.5 5zm0-4C8.673 1 8 1.673 8 2.5S8.673 4 9.5 4 11 3.327 11 2.5 10.327 1 9.5 1zM13.596 11.303c.295.295.694.464 1.095.464.362 0 .698-.136.944-.382.54-.54.503-1.454-.082-2.039l-2.492-2.492C12.574 6.367 11.688 6 11 6H8c-.688 0-1.574.367-2.061.854L3.447 9.346a1.563 1.563 0 00-.461 1.006 1.34 1.34 0 00.379 1.033c.246.246.582.382.944.382.401 0 .8-.169 1.095-.464l1.825-1.825.217.869-3.093 3.093c-.477.476-.378.889-.314 1.044S4.326 15 5 15h2v3.5a1.502 1.502 0 002.5 1.117A1.502 1.502 0 0012 18.5V15h2c.674 0 .896-.361.96-.516s.162-.568-.314-1.044l-3.093-3.093.217-.869 1.825 1.825zM8.5 19a.5.5 0 01-.5-.5V15h1v3.5a.5.5 0 01-.5.5zm2.5-.5a.5.5 0 01-1 0V15h1v3.5zm-.354-7.646L13.792 14H5.206l3.146-3.146a.502.502 0 00.132-.475l-.5-2a.5.5 0 00-.839-.233l-2.449 2.449a.558.558 0 01-.388.171.33.33 0 01-.237-.089.343.343 0 01-.088-.265.57.57 0 01.17-.36L6.645 7.56c.293-.293.939-.561 1.354-.561h3c.415 0 1.06.267 1.354.561l2.492 2.492c.192.192.229.478.082.625a.328.328 0 01-.237.089.558.558 0 01-.388-.171l-2.449-2.449a.5.5 0 00-.839.233l-.5 2a.498.498 0 00.132.475z"
  })));
}
LiniWoman2.propTypes = {
  size: PropTypes.number.isRequired
};