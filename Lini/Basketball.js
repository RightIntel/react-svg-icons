function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBasketball({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBasketball';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.218 3.782C14.424 1.988 12.038 1 9.5 1s-4.923.988-6.717 2.782S.001 7.962.001 10.499c0 2.538.988 4.923 2.782 6.717s4.18 2.782 6.717 2.782 4.923-.988 6.718-2.782C18.012 15.422 19 13.036 19 10.499s-.988-4.923-2.782-6.717zM17.985 10h-4.97a8.514 8.514 0 012.482-5.518A8.478 8.478 0 0117.985 10zm-5.13 4.443a9.46 9.46 0 001.893 2.739A8.454 8.454 0 0110 18.985V11h2.013a9.392 9.392 0 00.842 3.443zm-6.71-7.886a9.46 9.46 0 00-1.893-2.739A8.454 8.454 0 019 2.015V10H6.987a9.392 9.392 0 00-.842-3.443zM12.013 10H10V2.015a8.456 8.456 0 014.748 1.803 9.44 9.44 0 00-1.893 2.739A9.417 9.417 0 0012.013 10zm-5.026 1H9v7.985a8.456 8.456 0 01-4.748-1.803A9.46 9.46 0 006.987 11zM3.503 4.482A8.514 8.514 0 015.985 10h-4.97a8.473 8.473 0 012.488-5.518zM1.015 11h4.97a8.514 8.514 0 01-2.482 5.518A8.478 8.478 0 011.015 11zm14.482 5.518A8.514 8.514 0 0113.015 11h4.97a8.473 8.473 0 01-2.488 5.518z"
  })));
}
LiniBasketball.propTypes = {
  size: PropTypes.number.isRequired
};