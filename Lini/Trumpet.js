import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTrumpet({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTrumpet';

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
    d: "M19.615 4.014a.499.499 0 00-.562.262C19.034 4.313 17.152 8 14.5 8H10V7h.5a.5.5 0 000-1h-2a.5.5 0 000 1H9v1H6V7h.5a.5.5 0 000-1h-2a.5.5 0 000 1H5v1H1.515c-.128-.049-.406-.402-.568-.724A.5.5 0 000 7.5v4a.5.5 0 00.947.224c.162-.322.44-.675.568-.724h.521A3.506 3.506 0 004 14.662v.838a.5.5 0 00.5.5h2a.5.5 0 00.5-.5V15h1v.5a.5.5 0 00.5.5h2a.5.5 0 00.5-.5V15h.5a3.504 3.504 0 003.47-3.961c2.402.392 4.066 3.65 4.083 3.685A.5.5 0 0020 14.5v-10a.499.499 0 00-.385-.486zM3 11.5c0-.169.017-.336.05-.5H4v2.5a2.507 2.507 0 01-1-2zM5 15v-4h1v4H5zm3-3H7v-1h1v1zm-1 2v-1h1v1H7zm4.5 0h-1a.5.5 0 00-.5.5v.5H9v-4h1v1.5a.5.5 0 00.5.5h1c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5h-10a1 1 0 00-.5.144V8.855a.99.99 0 00.5.144h10c1.378 0 2.5 1.122 2.5 2.5s-1.122 2.5-2.5 2.5zm-.5-2v-1h.5a.5.5 0 010 1H11zm8 .782c-.902-1.201-2.406-2.698-4.337-2.779a3.513 3.513 0 00-.717-1.004h.553c2.01 0 3.573-1.548 4.5-2.782v6.565z"
  })));
}
LiniTrumpet.propTypes = {
  size: PropTypes.number.isRequired
};