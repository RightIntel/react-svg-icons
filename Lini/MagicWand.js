function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMagicWand({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMagicWand';

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
    d: "M11.5 7a.5.5 0 01-.5-.5C11 5.122 9.878 4 8.5 4a.5.5 0 010-1C9.878 3 11 1.878 11 .5a.5.5 0 011 0C12 1.878 13.122 3 14.5 3a.5.5 0 010 1A2.503 2.503 0 0012 6.5a.5.5 0 01-.5.5zm-1.199-3.5c.49.296.903.708 1.199 1.199.296-.49.708-.903 1.199-1.199A3.536 3.536 0 0111.5 2.301c-.296.49-.708.903-1.199 1.199zM1.5 10c-.276 0-.5-.224-.5-.5S.776 9 .5 9a.5.5 0 010-1c.276 0 .5-.224.5-.5a.5.5 0 011 0c0 .276.224.5.5.5a.5.5 0 010 1c-.276 0-.5.224-.5.5s-.224.5-.5.5zM18.147 15.939L7.561 5.353c-.283-.283-.659-.438-1.061-.438s-.778.156-1.061.438l-.586.586c-.283.283-.438.659-.438 1.061s.156.778.438 1.061l10.586 10.586c.283.283.659.438 1.061.438s.778-.156 1.061-.438l.586-.586c.283-.283.438-.659.438-1.061s-.156-.778-.438-1.061zM5.561 6.646l.586-.586c.094-.094.219-.145.354-.145s.26.052.354.145l1.439 1.439-1.293 1.293-1.439-1.439a.5.5 0 010-.707zm11.878 10.708l-.586.586c-.094.094-.219.145-.353.145s-.26-.052-.353-.145L7.708 9.501l1.293-1.293 8.439 8.439a.5.5 0 010 .707zM3.5 5a.5.5 0 01-.5-.5C3 3.673 2.327 3 1.5 3a.5.5 0 010-1C2.327 2 3 1.327 3 .5a.5.5 0 011 0C4 1.327 4.673 2 5.5 2a.5.5 0 010 1C4.673 3 4 3.673 4 4.5a.5.5 0 01-.5.5zm-.502-2.5c.19.143.359.312.502.502a2.54 2.54 0 01.502-.502 2.54 2.54 0 01-.502-.502 2.54 2.54 0 01-.502.502zM3.5 15a.5.5 0 01-.5-.5c0-.827-.673-1.5-1.5-1.5a.5.5 0 010-1c.827 0 1.5-.673 1.5-1.5a.5.5 0 011 0c0 .827.673 1.5 1.5 1.5a.5.5 0 010 1c-.827 0-1.5.673-1.5 1.5a.5.5 0 01-.5.5zm-.502-2.5c.19.143.359.312.502.502a2.54 2.54 0 01.502-.502 2.54 2.54 0 01-.502-.502 2.54 2.54 0 01-.502.502z"
  })));
}
LiniMagicWand.propTypes = {
  size: PropTypes.number.isRequired
};