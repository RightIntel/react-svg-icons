import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPower({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPower';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.5 20a.5.5 0 01-.457-.703L8.286 12H3.5a.5.5 0 01-.354-.854l10-10a.501.501 0 01.811.556l-3.243 7.297H15.5a.5.5 0 01.354.854l-10 10a.499.499 0 01-.354.146zm-.793-9h4.348a.5.5 0 01.457.704L7.05 17.243l7.242-7.242H9.944a.5.5 0 01-.457-.704l2.462-5.539L4.707 11z"
  })));
}
LiniPower.propTypes = {
  size: PropTypes.number.isRequired
};