function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniChicken({
  size,
  ...props
}) {
  let className = 'Component Lini LiniChicken';

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
    d: "M18.5 15H18c-.415 0-1.06-.267-1.354-.561l-1.778-1.778a2.238 2.238 0 00-.039-.677c-.14-.679-.555-1.403-1.128-2.404-.374-.653-.798-1.392-1.254-2.304-.143-.286-.296-.635-.474-1.039-.528-1.203-1.186-2.7-2.178-3.946C8.586.771 7.14 0 5.499 0a5.506 5.506 0 00-5.5 5.5c0 1.641.771 3.086 2.291 4.296 1.246.991 2.743 1.649 3.946 2.177.404.178.754.331 1.039.474.912.456 1.652.88 2.304 1.254 1.239.71 2.057 1.179 2.877 1.179.069 0 .137-.004.205-.011l1.777 1.777c.293.293.561.939.561 1.354v.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5a.5.5 0 01.5-.5c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5zm-8.422-2.166a45.437 45.437 0 00-2.354-1.281c-.308-.154-.685-.32-1.084-.495-2.246-.987-5.639-2.477-5.639-5.558 0-2.481 2.019-4.5 4.5-4.5 3.08 0 4.571 3.394 5.558 5.639.175.399.341.777.495 1.084.469.937.919 1.723 1.281 2.354 1.144 1.996 1.383 2.499.563 3.319-.429.429-.727.484-.939.484-.554 0-1.32-.439-2.38-1.047zM18.5 17c-.827 0-1.5.673-1.5 1.5a.5.5 0 01-1 0V18c0-.688-.367-1.574-.854-2.061l-1.47-1.47c.143-.102.285-.223.427-.366s.263-.284.365-.428l1.47 1.47c.487.487 1.372.854 2.061.854h.5a.5.5 0 010 1z"
  })));
}
LiniChicken.propTypes = {
  size: PropTypes.number.isRequired
};