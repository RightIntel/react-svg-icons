import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEscape({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEscape';

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
    d: "M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501a.5.5 0 011 0c0 4.687 3.813 8.5 8.5 8.5s8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5a.5.5 0 010-1c2.538 0 4.923.988 6.717 2.783S19 7.964 19 10.502s-.988 4.923-2.782 6.717A9.438 9.438 0 019.5 20.001z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.854 10.146L1.708 2h4.793a.5.5 0 000-1h-6a.5.5 0 00-.5.5v6a.5.5 0 001 0V2.707l8.146 8.146a.498.498 0 00.708 0 .5.5 0 000-.707z"
  })));
}
LiniEscape.propTypes = {
  size: PropTypes.number.isRequired
};