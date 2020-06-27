import React from 'react';
import PropTypes from 'prop-types';
export default function LiniArrowUpCircle({
  size,
  ...props
}) {
  let className = 'Component Lini LiniArrowUpCircle';

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
    d: "M2.782 3.782C.988 5.576 0 7.962 0 10.5s.988 4.923 2.782 6.718S6.962 20 9.5 20s4.923-.988 6.718-2.782S19 13.038 19 10.501s-.988-4.923-2.782-6.718-4.18-2.782-6.718-2.782-4.923.988-6.718 2.782zM18 10.5c0 4.687-3.813 8.5-8.5 8.5S1 15.187 1 10.5C1 5.813 4.813 2 9.5 2S18 5.813 18 10.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.147 4.647l-4 4a.5.5 0 00.707.707L9 6.207V16.5a.5.5 0 001 0V6.207l3.147 3.146a.5.5 0 00.706-.706l-4-4a.5.5 0 00-.707 0z"
  })));
}
LiniArrowUpCircle.propTypes = {
  size: PropTypes.number.isRequired
};