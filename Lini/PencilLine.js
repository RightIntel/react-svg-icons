function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPencilLine({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPencilLine';

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
    d: "M2.5 17a.5.5 0 01-.481-.637l1-3.5a.494.494 0 01.127-.216l11-11a.5.5 0 01.707 0l2.5 2.5a.5.5 0 010 .707l-11 11a.494.494 0 01-.216.127l-3.5 1A.498.498 0 012.5 17zm1.445-3.738l-.717 2.51 2.51-.717L16.293 4.5 14.5 2.707 3.945 13.262zM17.5 19h-15a.5.5 0 010-1h15a.5.5 0 010 1z"
  })));
}
LiniPencilLine.propTypes = {
  size: PropTypes.number.isRequired
};