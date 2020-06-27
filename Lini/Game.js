import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGame({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGame';

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
    d: "M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c1.776 0 3.508.493 5.009 1.426a9.538 9.538 0 013.435 3.717.502.502 0 01-.215.674L10.59 10.5l7.139 3.683a.5.5 0 01.215.674 9.538 9.538 0 01-3.435 3.717A9.478 9.478 0 019.5 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19a8.47 8.47 0 007.313-4.165L9.27 10.944a.5.5 0 010-.888l7.543-3.891A8.475 8.475 0 009.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 7c-.827 0-1.5-.673-1.5-1.5S10.673 4 11.5 4s1.5.673 1.5 1.5S12.327 7 11.5 7zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  })));
}
LiniGame.propTypes = {
  size: PropTypes.number.isRequired
};