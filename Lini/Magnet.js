function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMagnet({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMagnet';

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
    d: "M16.992 1.411A.5.5 0 0016.5 1h-4a.498.498 0 00-.495.566c.01.075.996 7.49.996 9.434 0 1.682-1.318 3-3 3-1.654 0-3-1.346-3-3 0-1.878.986-9.359.996-9.434a.499.499 0 00-.496-.565h-4a.5.5 0 00-.492.411c-.041.226-1.008 5.59-1.008 9.589 0 1.047.212 2.075.629 3.055a8.18 8.18 0 001.711 2.546c1.527 1.547 3.537 2.399 5.659 2.399s4.132-.852 5.659-2.399a8.163 8.163 0 001.711-2.546c.418-.98.629-2.008.629-3.055 0-3.999-.967-9.363-1.008-9.589zM16.079 2c.095.564.273 1.662.447 2.989l-3.081.01A299.232 299.232 0 0013.07 2h3.009zM3.921 2h3.01c-.083.64-.224 1.75-.371 2.988l-3.087.01c.174-1.331.352-2.432.448-2.998zM10 18c-3.794 0-7-3.206-7-7 0-1.568.158-3.385.348-5.001l3.094-.01C6.212 7.989 6 10.087 6 11c0 2.206 1.794 4 4 4 2.243 0 4-1.757 4-4 0-.939-.21-3.019-.438-5.002l3.089-.01C16.842 7.607 17 9.428 17 11c0 3.794-3.206 7-7 7z"
  })));
}
LiniMagnet.propTypes = {
  size: PropTypes.number.isRequired
};