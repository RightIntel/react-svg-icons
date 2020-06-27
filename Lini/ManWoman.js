function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniManWoman({
  size,
  ...props
}) {
  let className = 'Component Lini LiniManWoman';

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
    d: "M12.5 5C11.122 5 10 3.878 10 2.5S11.122 0 12.5 0 15 1.122 15 2.5 13.878 5 12.5 5zm0-4c-.827 0-1.5.673-1.5 1.5S11.673 4 12.5 4 14 3.327 14 2.5 13.327 1 12.5 1zM16.596 11.303c.295.295.694.464 1.095.464.362 0 .698-.136.944-.382.54-.54.503-1.454-.082-2.039l-2.492-2.492C15.574 6.367 14.688 6 14 6h-3c-.688 0-1.574.367-2.061.854L6.447 9.346a1.563 1.563 0 00-.461 1.006 1.34 1.34 0 00.379 1.033c.246.246.582.382.944.382.401 0 .8-.169 1.095-.464l1.825-1.825.217.869-3.093 3.093c-.476.476-.378.889-.314 1.044S7.326 15 8 15h2v3.5a1.502 1.502 0 002.5 1.117A1.502 1.502 0 0015 18.5V15h2c.674 0 .896-.361.96-.516s.162-.568-.314-1.044l-3.093-3.093.217-.869 1.825 1.825zM11.5 19a.5.5 0 01-.5-.5V15h1v3.5a.5.5 0 01-.5.5zm2.5-.5a.5.5 0 01-1 0V15h1v3.5zm-.354-7.646L16.792 14H8.206l3.146-3.146a.502.502 0 00.132-.475l-.5-2a.5.5 0 00-.839-.233l-2.449 2.449a.558.558 0 01-.388.171.33.33 0 01-.237-.089.343.343 0 01-.088-.265.57.57 0 01.17-.36L9.645 7.56c.293-.293.939-.561 1.354-.561h3c.415 0 1.06.267 1.354.561l2.492 2.492c.192.192.229.478.082.625a.328.328 0 01-.237.089.558.558 0 01-.388-.171l-2.449-2.449a.5.5 0 00-.839.233l-.5 2a.498.498 0 00.132.475zM5.5 5C4.122 5 3 3.878 3 2.5S4.122 0 5.5 0 8 1.122 8 2.5 6.878 5 5.5 5zm0-4C4.673 1 4 1.673 4 2.5S4.673 4 5.5 4 7 3.327 7 2.5 6.327 1 5.5 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 16a.5.5 0 00-.5.5v2a.5.5 0 01-1 0v-6a.5.5 0 00-1 0v6a.5.5 0 01-1 0v-10a.5.5 0 00-1 0v3a.5.5 0 01-1 0v-4a.5.5 0 01.5-.5h5a.5.5 0 000-1h-5C1.673 6 1 6.673 1 7.5v4a1.502 1.502 0 002 1.414V18.5a1.502 1.502 0 002.5 1.117A1.502 1.502 0 008 18.5v-2a.5.5 0 00-.5-.5z"
  })));
}
LiniManWoman.propTypes = {
  size: PropTypes.number.isRequired
};