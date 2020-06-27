function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniNetworkLock({
  size,
  ...props
}) {
  let className = 'Component Lini LiniNetworkLock';

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
    d: "M16.218 3.782A9.438 9.438 0 009.5 1a.5.5 0 00-.5.5V10H.5a.5.5 0 00-.5.5c0 2.538.988 4.923 2.783 6.718S6.963 20 9.5 20s4.923-.988 6.718-2.782C18.012 15.424 19 13.038 19 10.501s-.988-4.923-2.782-6.718zM6.402 16.621a9.285 9.285 0 01-.484-1.018 15.66 15.66 0 003.083.389v2.953c-.963-.208-1.871-1.015-2.598-2.324zM10 18.946v-2.953a15.735 15.735 0 003.083-.39 9.285 9.285 0 01-.484 1.018c-.727 1.309-1.636 2.116-2.598 2.324zm0-3.954V11h3.992a14.355 14.355 0 01-.521 3.471 14.299 14.299 0 01-3.471.521zM14.992 10a15.811 15.811 0 00-.389-3.083c.358.145.699.307 1.018.484 1.309.727 2.116 1.636 2.324 2.598h-2.953zm0 1h2.953c-.208.963-1.015 1.871-2.324 2.598-.319.177-.66.339-1.018.484.226-.972.358-2.011.39-3.083zm2.44-3.555a7.686 7.686 0 00-1.325-.918 10.78 10.78 0 00-1.837-.797 10.86 10.86 0 00-.797-1.837 7.686 7.686 0 00-.918-1.325 8.545 8.545 0 014.877 4.877zm-4.834-3.066c.177.319.339.66.484 1.018a15.66 15.66 0 00-3.083-.389V2.055c.963.208 1.871 1.015 2.598 2.324zM10 6.008c1.227.038 2.405.217 3.471.521.305 1.066.483 2.243.521 3.471H10V6.008zm-1 8.984a14.355 14.355 0 01-3.471-.521A14.299 14.299 0 015.008 11H9v3.992zm-4.603-.909a9.285 9.285 0 01-1.018-.484c-1.309-.727-2.116-1.636-2.324-2.598h2.953c.032 1.072.164 2.111.389 3.083zm-2.829-.528c.378.33.821.638 1.325.918.56.311 1.177.578 1.837.797.22.66.486 1.277.797 1.837.28.504.588.947.918 1.325a8.545 8.545 0 01-4.877-4.877zm10.987 4.877c.33-.378.638-.821.918-1.325.311-.56.578-1.177.797-1.837a10.86 10.86 0 001.837-.797c.504-.28.947-.588 1.325-.918a8.545 8.545 0 01-4.877 4.877z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 3.086V2.5C7 1.122 5.878 0 4.5 0S2 1.122 2 2.5v.586c-.582.206-1 .762-1 1.414v3C1 8.327 1.673 9 2.5 9h4C7.327 9 8 8.327 8 7.5v-3c0-.652-.418-1.208-1-1.414zM4.5 1C5.327 1 6 1.673 6 2.5V3H3v-.5C3 1.673 3.673 1 4.5 1zM7 7.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v3z"
  })));
}
LiniNetworkLock.propTypes = {
  size: PropTypes.number.isRequired
};