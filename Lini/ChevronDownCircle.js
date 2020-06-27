import React from 'react';
import PropTypes from 'prop-types';
export default function LiniChevronDownCircle({
  size,
  ...props
}) {
  let className = 'Component Lini LiniChevronDownCircle';

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
    d: "M16.218 17.218C18.012 15.424 19 13.038 19 10.5s-.988-4.923-2.782-6.717-4.18-2.782-6.718-2.782-4.923.988-6.718 2.782S0 7.963 0 10.5s.988 4.923 2.782 6.718S6.962 20 9.5 20s4.923-.988 6.718-2.782zM1 10.5C1 5.813 4.813 2 9.5 2S18 5.813 18 10.5c0 4.687-3.813 8.5-8.5 8.5S1 15.187 1 10.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 9a.5.5 0 01.853-.354l4.646 4.646 4.646-4.646a.5.5 0 01.707.707l-5 5a.5.5 0 01-.707 0l-5-5a.498.498 0 01-.146-.354z"
  })));
}
LiniChevronDownCircle.propTypes = {
  size: PropTypes.number.isRequired
};