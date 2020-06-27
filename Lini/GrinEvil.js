import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGrinEvil({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGrinEvil';

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
    d: "M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c2.538 0 4.923.988 6.718 2.783S19 7.963 19 10.501s-.988 4.923-2.782 6.717A9.438 9.438 0 019.5 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19s8.5-3.813 8.5-8.5S14.187 2 9.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 10h-12a.5.5 0 00-.5.5C3 14.084 5.916 17 9.5 17s6.5-2.916 6.5-6.5a.5.5 0 00-.5-.5zM9 15.977a5.453 5.453 0 01-2-.579V11h2v4.977zM10 11h2v4.398a5.453 5.453 0 01-2 .579V11zm-5.977 0H6v3.739A5.496 5.496 0 014.022 11zM13 14.739V11h1.977A5.493 5.493 0 0113 14.739zM7.853 6.854a.498.498 0 00-.13-.801l-2-1a.5.5 0 00-.447.895l.49.245a1.501 1.501 0 00.733 2.808 1.502 1.502 0 001.353-2.146zM6.5 8a.5.5 0 110-1 .5.5 0 010 1zM13.233 6.192l.49-.245a.5.5 0 00-.447-.895l-2 1a.5.5 0 00-.13.801 1.502 1.502 0 001.353 2.146c.827 0 1.5-.673 1.5-1.5 0-.561-.31-1.05-.767-1.308zM12.5 8a.5.5 0 110-1 .5.5 0 010 1z"
  })));
}
LiniGrinEvil.propTypes = {
  size: PropTypes.number.isRequired
};