import React from 'react';
import PropTypes from 'prop-types';
export default function LiniShocked2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniShocked2';

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
    d: "M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c2.538 0 4.923.988 6.718 2.783S19 7.963 19 10.501s-.988 4.923-2.782 6.717A9.438 9.438 0 019.5 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19c4.687 0 8.5-3.813 8.5-8.5S14.187 2 9.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 15h-6a.5.5 0 010-1h6a.5.5 0 010 1zM12.5 9c-.827 0-1.5-.673-1.5-1.5S11.673 6 12.5 6s1.5.673 1.5 1.5S13.327 9 12.5 9zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 4a3.501 3.501 0 00-3 1.699A3.501 3.501 0 006.5 4C4.57 4 3 5.57 3 7.5S4.57 11 6.5 11a3.501 3.501 0 003-1.699 3.501 3.501 0 003 1.699c1.93 0 3.5-1.57 3.5-3.5S14.43 4 12.5 4zm-6 6C5.122 10 4 8.878 4 7.5S5.122 5 6.5 5 9 6.122 9 7.5 7.878 10 6.5 10zm6 0C11.122 10 10 8.878 10 7.5S11.122 5 12.5 5 15 6.122 15 7.5 13.878 10 12.5 10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 9C5.673 9 5 8.327 5 7.5S5.673 6 6.5 6 8 6.673 8 7.5 7.327 9 6.5 9zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  })));
}
LiniShocked2.propTypes = {
  size: PropTypes.number.isRequired
};