import React from 'react';
import PropTypes from 'prop-types';
export default function LiniAccessibility({
  size,
  ...props
}) {
  let className = 'Component Lini LiniAccessibility';

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
    d: "M9.5 8C8.122 8 7 6.878 7 5.5S8.122 3 9.5 3 12 4.122 12 5.5 10.878 8 9.5 8zm0-4C8.673 4 8 4.673 8 5.5S8.673 7 9.5 7 11 6.327 11 5.5 10.327 4 9.5 4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.985 8.379a.5.5 0 00-.606-.364l-3.879.97-3.879-.97a.5.5 0 10-.242.97L9 9.89v2.443L6.1 16.2a.5.5 0 10.8.6l2.6-3.467 2.6 3.467a.498.498 0 00.7.1.5.5 0 00.1-.7L10 12.333V9.89l3.621-.905a.5.5 0 00.364-.606z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c2.538 0 4.923.988 6.718 2.783S19 7.963 19 10.501s-.988 4.923-2.782 6.717A9.438 9.438 0 019.5 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19s8.5-3.813 8.5-8.5S14.187 2 9.5 2z"
  })));
}
LiniAccessibility.propTypes = {
  size: PropTypes.number.isRequired
};