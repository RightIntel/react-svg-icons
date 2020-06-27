function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniWrench({
  size,
  ...props
}) {
  let className = 'Component Lini LiniWrench';

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
    d: "M16.75 20.013a2.257 2.257 0 01-1.597-.655l-.002-.002-7.71-7.709A5.506 5.506 0 01.486 4.235a.5.5 0 01.809-.148l2.912 2.912H6V5.206L3.081 2.287a.498.498 0 01.148-.809A5.555 5.555 0 015.501.999c3.033 0 5.5 2.467 5.5 5.5 0 .663-.12 1.312-.357 1.936l7.704 7.704c.43.425.668.992.671 1.596s-.231 1.173-.656 1.604a2.248 2.248 0 01-1.613.673zm-.894-1.365c.239.236.557.366.894.366.342 0 .662-.133.901-.376a1.264 1.264 0 00-.007-1.787l-.002-.002L9.7 8.907a.5.5 0 01-.102-.56A4.458 4.458 0 0010 6.5C10 4.019 7.981 2 5.5 2c-.392 0-.78.049-1.15.143l2.504 2.504A.5.5 0 017 5.001v2.5a.5.5 0 01-.5.5H4a.504.504 0 01-.354-.146l-2.5-2.5a4.505 4.505 0 006.205 5.249.5.5 0 01.56.102l7.944 7.943z"
  })));
}
LiniWrench.propTypes = {
  size: PropTypes.number.isRequired
};