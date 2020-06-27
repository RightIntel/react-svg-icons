function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniColorSampler({
  size,
  ...props
}) {
  let className = 'Component Lini LiniColorSampler';

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
    d: "M13.5 9c-.827 0-1.5-.673-1.5-1.5S12.673 6 13.5 6s1.5.673 1.5 1.5S14.327 9 13.5 9zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 18.585c-.401 0-.778-.156-1.061-.438L.853 13.061C.57 12.778.415 12.402.415 12s.156-.778.438-1.061l9.586-9.586c.283-.283.659-.438 1.061-.438s.778.156 1.061.438l5.086 5.086a1.501 1.501 0 010 2.121l-9.586 9.586A1.488 1.488 0 017 18.584zm4.5-16.67a.5.5 0 00-.354.145L1.56 11.646c-.094.094-.145.219-.145.354s.052.26.145.353l5.086 5.086c.094.094.219.145.354.145s.26-.052.354-.145l9.586-9.586a.5.5 0 000-.707L11.854 2.06a.495.495 0 00-.354-.145zM11.223 19.981a1.46 1.46 0 01-.83-.26l-1.176-.808a.5.5 0 11.566-.824l1.176.808a.467.467 0 00.659-.133l5.461-8.533a.5.5 0 01.843.539l-5.461 8.533a1.457 1.457 0 01-1.238.678zM15.445 19.282c-.119 0-.238-.019-.353-.057l-.75-.25a.499.499 0 11.316-.948l.75.25c.014.005.055.018.126-.02a.566.566 0 00.246-.352l1.237-4.535a.5.5 0 01.965.263l-1.237 4.535c-.117.428-.386.782-.739.971-.179.096-.37.144-.561.144z"
  })));
}
LiniColorSampler.propTypes = {
  size: PropTypes.number.isRequired
};