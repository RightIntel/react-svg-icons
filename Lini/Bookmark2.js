function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBookmark2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBookmark2';

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
    d: "M15.5 20a.501.501 0 01-.38-.175L9.5 13.268l-5.62 6.557A.5.5 0 013 19.5v-18a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v18a.5.5 0 01-.5.5zm-6-8a.5.5 0 01.38.175L15 18.149V2.001H4v16.148l5.12-5.974A.5.5 0 019.5 12z"
  })));
}
LiniBookmark2.propTypes = {
  size: PropTypes.number.isRequired
};