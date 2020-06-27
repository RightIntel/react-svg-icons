function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniVolumeHigh({
  size,
  ...props
}) {
  let className = 'Component Lini LiniVolumeHigh';

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
    d: "M13.653 14.881a.5.5 0 01-.316-.887C14.394 13.135 15 11.861 15 10.501s-.606-2.633-1.662-3.493a.499.499 0 11.631-.775C15.26 7.283 16 8.839 16 10.502s-.74 3.218-2.031 4.269a.5.5 0 01-.315.112z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.545 17.209a.5.5 0 01-.316-.887C16.99 14.89 18 12.768 18 10.501s-1.01-4.389-2.771-5.821a.499.499 0 11.631-.775C17.855 5.528 19 7.933 19 10.502s-1.144 4.974-3.14 6.597a.5.5 0 01-.315.112zM11.762 12.552a.5.5 0 01-.316-.887c.352-.287.554-.711.554-1.164s-.202-.878-.554-1.164a.499.499 0 11.631-.775c.587.477.923 1.184.923 1.94s-.337 1.463-.923 1.94a.5.5 0 01-.315.112zM8.15 3.207c-.247 0-.494.104-.736.309L3.316 6.999H1.5c-.827 0-1.5.673-1.5 1.5v4c0 .827.673 1.5 1.5 1.5h1.816l4.098 3.483c.241.205.489.309.736.309a.796.796 0 00.67-.362c.119-.179.18-.408.18-.68v-12.5c0-.72-.427-1.043-.85-1.043zM1 12.5v-4a.5.5 0 01.5-.5H3v5H1.5a.5.5 0 01-.5-.5zm7 4.169l-4-3.4V7.731l4-3.4v12.338z"
  })));
}
LiniVolumeHigh.propTypes = {
  size: PropTypes.number.isRequired
};