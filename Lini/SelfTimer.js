import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSelfTimer({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSelfTimer';

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
    d: "M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501a9.4 9.4 0 01.988-4.223.5.5 0 01.895.445A8.412 8.412 0 001 10.5C1 15.187 4.813 19 9.5 19s8.5-3.813 8.5-8.5S14.187 2 9.5 2a.5.5 0 01-.121-.985l4-1a.5.5 0 11.242.97l-1.508.377a9.45 9.45 0 014.104 2.42c1.794 1.794 2.782 4.18 2.782 6.718s-.988 4.923-2.782 6.717A9.438 9.438 0 019.5 19.999z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 11.027a.494.494 0 01-.258-.072l-5-3.027a.5.5 0 01.518-.856l5 3.027a.5.5 0 01-.259.928z"
  })));
}
LiniSelfTimer.propTypes = {
  size: PropTypes.number.isRequired
};