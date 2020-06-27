import React from 'react';
import PropTypes from 'prop-types';
export default function LiniRadar({
  size,
  ...props
}) {
  let className = 'Component Lini LiniRadar';

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
    d: "M9.5 17a6.504 6.504 0 01-6.411-5.418.5.5 0 01.986-.166 5.481 5.481 0 005.424 4.583c3.033 0 5.5-2.467 5.5-5.5a.5.5 0 011 0c0 3.584-2.916 6.5-6.5 6.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 13.829a.499.499 0 01-.166-.971 2.504 2.504 0 001.667-2.358.5.5 0 011 0 3.508 3.508 0 01-2.333 3.301.51.51 0 01-.167.029zM12.724 4.053a.5.5 0 00-.671.224l-.101.202a6.504 6.504 0 00-8.863 4.939.5.5 0 00.985.166 5.48 5.48 0 015.424-4.583 5.44 5.44 0 012.003.376L10.6 7.178a3.504 3.504 0 00-4.603 3.323c0 1.481.938 2.807 2.333 3.301a.499.499 0 10.333-.942 2.504 2.504 0 01-1.667-2.358 2.503 2.503 0 013.149-2.415l-.464.927a1.502 1.502 0 00-1.685 1.488c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5c0-.404-.161-.77-.421-1.04l.709-1.419.001-.001v-.001l1.341-2.682v-.001-.001l.316-.632a.5.5 0 00-.224-.671zM9.5 11a.5.5 0 110-1 .5.5 0 010 1z"
  })));
}
LiniRadar.propTypes = {
  size: PropTypes.number.isRequired
};