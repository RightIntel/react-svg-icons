import React from 'react';
import PropTypes from 'prop-types';
export default function LiniLigature({
  size,
  ...props
}) {
  let className = 'Component Lini LiniLigature';

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
    d: "M18 20c-1.103 0-2-.897-2-2v-6.501a2.485 2.485 0 01-1.5.501H9v3.5C9 17.981 6.981 20 4.5 20S0 17.981 0 15.5 2.019 11 4.5 11H8V6c0-2.757 2.243-5 5-5a5.01 5.01 0 014.9 4h1.6a.5.5 0 010 1H18v.5c0 .827-.673 1.5-1.5 1.5S15 7.327 15 6.5 15.673 5 16.5 5h.373A4.007 4.007 0 0013 2c-2.206 0-4 1.794-4 4v5h5.5c.827 0 1.5-.673 1.5-1.5a.5.5 0 011 0V18c0 .551.449 1 1 1s1-.449 1-1v-.5a.5.5 0 011 0v.5c0 1.103-.897 2-2 2zM4.5 12C2.57 12 1 13.57 1 15.5S2.57 19 4.5 19 8 17.43 8 15.5V12H4.5zm12-6a.5.5 0 10.5.5V6h-.5z"
  })));
}
LiniLigature.propTypes = {
  size: PropTypes.number.isRequired
};