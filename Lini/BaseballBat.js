function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBaseballBat({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBaseballBat';

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
    d: "M16.753 19.445c-.332 0-.636-.121-.856-.342a1.343 1.343 0 01-.396-.868c-.02-.341.102-.669.333-.901.009-.009.022-.05.011-.124a.68.68 0 00-.198-.357l-2.5-2.5c-1.119-1.119-2.397-1.516-3.749-1.936-1.56-.485-3.173-.986-4.751-2.564L1.05 6.256a3.504 3.504 0 010-4.95l.257-.257C1.966.39 2.845.028 3.782.028S5.598.391 6.257 1.05l3.597 3.597c1.557 1.557 2.193 3.021 2.808 4.437.542 1.247 1.053 2.425 2.192 3.563l2.5 2.5c.15.15.314.203.41.203.044 0 .065-.01.071-.015a1.16 1.16 0 01.827-.336c.346 0 .689.145.942.398.505.505.44 1.392-.145 1.977l-1.586 1.586a1.61 1.61 0 01-1.12.486zM3.781 1.028c-.67 0-1.298.259-1.768.729l-.257.257a2.503 2.503 0 000 3.536l3.597 3.597c1.403 1.403 2.896 1.867 4.34 2.316 1.409.438 2.867.891 4.16 2.184l2.5 2.5c.257.257.427.579.479.908.06.382-.046.741-.292.987-.069.069-.057.236.063.355.041.04.103.049.149.049a.61.61 0 00.413-.194l1.586-1.586a.646.646 0 00.191-.368c.005-.04.009-.139-.046-.195a.34.34 0 00-.235-.105c-.035 0-.085.007-.12.043a1.087 1.087 0 01-.778.308c-.395 0-.802-.181-1.117-.496l-2.5-2.5c-1.273-1.273-1.847-2.594-2.402-3.872-.578-1.33-1.175-2.705-2.598-4.128L5.549 1.756a2.483 2.483 0 00-1.768-.729z"
  })));
}
LiniBaseballBat.propTypes = {
  size: PropTypes.number.isRequired
};