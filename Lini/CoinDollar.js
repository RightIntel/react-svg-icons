import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCoinDollar({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCoinDollar';

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
    d: "M12.5 8H7V7h5.5a.5.5 0 000-1H10v-.5a.5.5 0 00-1 0V6H6.5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5H12v1H6.5a.5.5 0 000 1H9v.5a.5.5 0 001 0V11h2.5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.107 4.527C14.334 3.542 11.988 3 9.5 3s-4.834.542-6.607 1.527C1.027 5.564 0 6.974 0 8.5v3c0 1.525 1.027 2.936 2.893 3.973C4.666 16.458 7.012 17 9.5 17s4.834-.542 6.607-1.527C17.973 14.436 19 13.026 19 11.5v-3c0-1.525-1.027-2.936-2.893-3.973zm-12.728.875C5.006 4.498 7.18 4 9.5 4s4.494.498 6.121 1.402C17.155 6.254 18 7.355 18 8.5s-.845 2.246-2.379 3.098C13.994 12.502 11.82 13 9.5 13s-4.494-.498-6.121-1.402C1.845 10.746 1 9.645 1 8.5s.845-2.246 2.379-3.098zM18 11.5c0 1.146-.845 2.246-2.379 3.098C13.994 15.502 11.82 16 9.5 16s-4.494-.498-6.121-1.402C1.845 13.746 1 12.645 1 11.5v-.513c.474.548 1.109 1.05 1.893 1.486C4.666 13.458 7.012 14 9.5 14s4.834-.542 6.607-1.527c.784-.436 1.419-.937 1.893-1.486v.513z"
  })));
}
LiniCoinDollar.propTypes = {
  size: PropTypes.number.isRequired
};