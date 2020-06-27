function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBicycle({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBicycle';

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
    d: "M16.5 13c-.625 0-1.212.165-1.72.453l-1.564-2.026.612-1.427h.672a.5.5 0 000-1h-2a.5.5 0 000 1h.239l-.429 1H6.885l-.243-.315.476-1.068c.171-.383.528-.617.666-.617h.715a.5.5 0 000-1h-.715c-.593 0-1.272.52-1.579 1.209l-.598 1.34-.002.004-1.151 2.579A3.502 3.502 0 00-.001 16.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5a3.5 3.5 0 00-1.632-2.959l.812-1.82 3.057 3.96a1.493 1.493 0 00-.245.818 1.504 1.504 0 002.922.5h1.122a3.505 3.505 0 003.464 3c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5zM6 16.5C6 17.878 4.878 19 3.5 19S1 17.878 1 16.5a2.503 2.503 0 013.041-2.44l-.998 2.237a.5.5 0 10.913.408l.997-2.235a2.497 2.497 0 011.046 2.032zm5.513-1.104l1.251-2.917 1.224 1.586A3.493 3.493 0 0013.035 16h-1.122a1.52 1.52 0 00-.4-.604zm3.096-.528L15.483 16h-1.432a2.5 2.5 0 01.558-1.132zM11.882 12l-1.288 3.003a1.49 1.49 0 00-.563.071L7.658 12h4.224zm-1.386 5c-.278 0-.504-.224-.504-.5s.226-.5.504-.5.504.224.504.5-.226.5-.504.5zm6.004 2a2.505 2.505 0 01-2.45-2h2.45a.5.5 0 00.396-.805L15.4 14.257a2.503 2.503 0 013.601 2.244c0 1.378-1.122 2.5-2.5 2.5z"
  })));
}
LiniBicycle.propTypes = {
  size: PropTypes.number.isRequired
};