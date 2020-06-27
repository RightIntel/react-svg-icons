function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGlasses({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGlasses';

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
    d: "M18.5 9h-.647a2.554 2.554 0 00-.385-.845C16.916 7.378 15.904 7 14.375 7h-9.75c-1.529 0-2.541.378-3.093 1.155A2.573 2.573 0 001.147 9H.5a.5.5 0 000 1h.511c-.009.195-.011.394-.011.594C1 12.568 2.393 14 4.313 14c.912 0 2.063-.614 3.077-1.643.756-.767 1.283-1.605 1.5-2.357h1.22c.217.752.744 1.59 1.5 2.357C12.625 13.386 13.775 14 14.687 14 16.606 14 18 12.567 18 10.594c0-.2-.002-.399-.011-.594h.511a.5.5 0 000-1zm-8.487 0H8.986c-.038-.397-.16-.729-.367-1h1.761c-.208.271-.329.603-.367 1zm-3.335 2.655C5.872 12.472 4.944 13 4.313 13 2.951 13 2 12.011 2 10.594c0-.361.007-.691.045-.985a.454.454 0 00.01-.074c.148-.971.68-1.534 2.57-1.534C7.765 8.001 8 8.508 8 9.282c0 .627-.519 1.558-1.322 2.373zM14.688 13c-.631 0-1.559-.528-2.365-1.345-.803-.815-1.322-1.746-1.322-2.373 0-.774.235-1.281 3.375-1.281 1.889 0 2.422.564 2.57 1.534a7.89 7.89 0 01.055 1.059c0 1.417-.951 2.406-2.313 2.406z"
  })));
}
LiniGlasses.propTypes = {
  size: PropTypes.number.isRequired
};