import React from 'react';
import PropTypes from 'prop-types';
export default function LiniClock3({
  size,
  ...props
}) {
  let className = 'Component Lini LiniClock3';

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
    d: "M16.218 3.782C14.424 1.988 12.038 1 9.5 1s-4.923.988-6.718 2.782C.988 5.576 0 7.962 0 10.499s.988 4.923 2.782 6.718 4.18 2.782 6.718 2.782 4.923-.988 6.718-2.782S19 13.037 19 10.499s-.988-4.923-2.782-6.717zM9.5 19C4.813 19 1 15.187 1 10.5S4.813 2 9.5 2 18 5.813 18 10.5 14.187 19 9.5 19z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.129 7.25a.5.5 0 00-.683-.183l-4.92 2.841-3.835-2.685a.5.5 0 00-.573.819l4.096 2.868.003.002.026.016.007.004.027.014.006.003.031.014.019.007.014.005.02.006.013.003.02.005.014.003.019.003.018.002.016.002a.409.409 0 00.092-.002h.001a.53.53 0 00.055-.01l.004-.001a.333.333 0 00.058-.019.396.396 0 00.047-.021l.009-.005.017-.009 5.196-3a.5.5 0 00.183-.683z"
  })));
}
LiniClock3.propTypes = {
  size: PropTypes.number.isRequired
};