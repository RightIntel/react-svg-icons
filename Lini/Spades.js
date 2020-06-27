function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSpades({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSpades';

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
    d: "M13.5 20h-8a.5.5 0 01-.224-.947 4.755 4.755 0 002.368-2.595 5.47 5.47 0 00.099-.276A5.006 5.006 0 01-.001 12c0-1.392.523-2.641 1.598-3.819.915-1.002 2.116-1.835 3.278-2.641C6.996 4.069 8.999 2.679 8.999.5a.5.5 0 011 0c0 2.179 2.003 3.569 4.124 5.04 1.162.806 2.363 1.639 3.278 2.641 1.075 1.177 1.598 2.426 1.598 3.819a5.006 5.006 0 01-7.744 4.182c.029.09.062.182.099.276a4.752 4.752 0 002.368 2.595.5.5 0 01-.224.947zm-6.399-1h4.798a5.824 5.824 0 01-1.491-2.22c-.403-1.055-.408-1.916-.408-1.952a.502.502 0 01.889-.314A3.987 3.987 0 0014.001 16c2.206 0 4-1.794 4-4 0-2.554-2.159-4.052-4.446-5.638-1.607-1.115-3.253-2.257-4.054-3.811-.802 1.555-2.448 2.697-4.054 3.811C3.161 7.948 1.001 9.446 1.001 12c0 2.206 1.794 4 4 4a3.99 3.99 0 003.112-1.486.5.5 0 01.889.314c0 .036-.005.897-.408 1.952A5.832 5.832 0 017.103 19z"
  })));
}
LiniSpades.propTypes = {
  size: PropTypes.number.isRequired
};