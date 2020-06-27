function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSortAlphaDesc({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSortAlphaDesc';

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
    d: "M8.854 14.646a.5.5 0 00-.707 0l-3.146 3.146V.499a.5.5 0 00-1 0v17.293L.855 14.646a.5.5 0 00-.707.707l4 4a.498.498 0 00.708 0l4-4a.5.5 0 000-.707zM19.96 19.303l-3-7a.5.5 0 00-.92 0l-3 7a.5.5 0 10.92.394L15.116 17h2.769l1.156 2.697a.5.5 0 00.657.262.501.501 0 00.263-.657zM15.544 16l.956-2.231.956 2.231h-1.912zM18.5 8h-4a.5.5 0 01-.434-.748L17.639 1h-3.138a.5.5 0 010-1h4a.5.5 0 01.434.748L15.362 7H18.5a.5.5 0 010 1z"
  })));
}
LiniSortAlphaDesc.propTypes = {
  size: PropTypes.number.isRequired
};