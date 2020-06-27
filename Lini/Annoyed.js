import React from 'react';
import PropTypes from 'prop-types';
export default function LiniAnnoyed({
  size,
  ...props
}) {
  let className = 'Component Lini LiniAnnoyed';

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
    d: "M14 11H5c-1.103 0-2 .897-2 2s.897 2 2 2h9c1.103 0 2-.897 2-2s-.897-2-2-2zm-4 1h2v2h-2v-2zm-1 2H7v-2h2v2zm-5-1c0-.551.449-1 1-1h1v2H5c-.551 0-1-.449-1-1zm10 1h-1v-2h1c.551 0 1 .449 1 1s-.449 1-1 1zM7.853 6.854a.498.498 0 00-.13-.801l-2-1a.5.5 0 00-.447.895l.49.245a1.501 1.501 0 00.733 2.808 1.502 1.502 0 001.353-2.146zM6.5 8a.5.5 0 110-1 .5.5 0 010 1zM13.233 6.192l.49-.245a.5.5 0 00-.447-.895l-2 1a.5.5 0 00-.13.801 1.502 1.502 0 001.353 2.146c.827 0 1.5-.673 1.5-1.5 0-.561-.31-1.05-.767-1.308zM12.5 8a.5.5 0 110-1 .5.5 0 010 1z"
  })));
}
LiniAnnoyed.propTypes = {
  size: PropTypes.number.isRequired
};