import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSnow2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSnow2';

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
    d: "M18.5 10h-1.793l1.146-1.146a.5.5 0 00-.707-.707l-1.854 1.854h-4.586l3-3h2.793a.5.5 0 000-1h-1.793l1.646-1.646a.5.5 0 00-.707-.707l-1.646 1.646V3.501a.5.5 0 00-1 0v2.793l-3 3V4.708l1.854-1.854a.5.5 0 00-.707-.707L10 3.293V1.5a.5.5 0 00-1 0v1.793L7.854 2.147a.5.5 0 00-.707.707l1.854 1.854v4.586l-3-3V3.501a.5.5 0 00-1 0v1.793L3.355 3.648a.5.5 0 00-.707.707l1.646 1.646H2.501a.5.5 0 000 1h2.793l3 3H3.708L1.854 8.147a.5.5 0 00-.707.707L2.293 10H.5a.5.5 0 000 1h1.793l-1.146 1.146a.5.5 0 00.708.707l1.854-1.854h4.586l-3 3H2.502a.5.5 0 000 1h1.793l-1.646 1.646a.5.5 0 00.708.707l1.646-1.646v1.793a.5.5 0 001 0v-2.793l3-3v4.586l-1.854 1.854a.5.5 0 00.707.707l1.146-1.146V19.5a.5.5 0 001 0v-1.793l1.146 1.146a.498.498 0 00.708 0 .5.5 0 000-.707l-1.854-1.854v-4.586l3 3v2.793a.5.5 0 001 0v-1.793l1.646 1.646a.498.498 0 00.708 0 .5.5 0 000-.707l-1.646-1.646h1.793a.5.5 0 000-1H13.71l-3-3h4.586l1.854 1.854a.498.498 0 00.708 0 .5.5 0 000-.707L16.712 11h1.793a.5.5 0 000-1z"
  })));
}
LiniSnow2.propTypes = {
  size: PropTypes.number.isRequired
};