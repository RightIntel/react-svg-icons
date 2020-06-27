function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPaw({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPaw';

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
    d: "M3 12c-1.122 0-2-1.322-2-3.011s.878-3.011 2-3.011S5 7.3 5 8.989 4.122 12 3 12zm0-5.022c-.472 0-1 .86-1 2.011S2.528 11 3 11s1-.86 1-2.011-.528-2.011-1-2.011zM6.998 8C5.878 8 5 6.682 5 5s.878-3 1.998-3 1.998 1.318 1.998 3-.878 3-1.998 3zm0-5C6.527 3 6 3.855 6 5s.527 2 .998 2 .998-.855.998-2-.527-2-.998-2zM12 8c-1.122 0-2-1.318-2-3s.878-3 2-3 2 1.318 2 3-.878 3-2 3zm0-5c-.472 0-1 .855-1 2s.528 2 1 2 1-.855 1-2-.528-2-1-2zM16 12c-1.122 0-2-1.322-2-3.011s.878-3.011 2-3.011 2 1.322 2 3.011S17.122 12 16 12zm0-5.022c-.472 0-1 .86-1 2.011S15.528 11 16 11s1-.86 1-2.011-.528-2.011-1-2.011zM13 18c-.868 0-1.455-.294-1.972-.553-.48-.24-.894-.447-1.528-.447-.631 0-1.045.207-1.525.447C7.456 17.706 6.868 18 6 18c-.556 0-1.079-.303-1.437-.831-.627-.926-.637-2.331-.028-3.855C5.632 10.572 7.441 9 9.499 9s3.868 1.572 4.964 4.314c.609 1.524.599 2.929-.028 3.855-.357.528-.881.831-1.437.831zm-3.5-2c.869 0 1.457.294 1.975.553.479.24.893.447 1.525.447.218 0 .44-.143.609-.391.432-.637.404-1.73-.073-2.923C12.599 11.344 11.128 10 9.5 10s-3.099 1.343-4.036 3.686c-.477 1.193-.504 2.286-.073 2.923.168.249.39.391.609.391.632 0 1.047-.207 1.528-.448.518-.259 1.106-.553 1.972-.553z"
  })));
}
LiniPaw.propTypes = {
  size: PropTypes.number.isRequired
};