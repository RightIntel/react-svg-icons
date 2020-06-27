function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEggs({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEggs';

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
    d: "M5.5 8a.5.5 0 010-1c.276 0 .5-.224.5-.5a.5.5 0 011 0C7 7.327 6.327 8 5.5 8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 10C3.57 10 2 8.43 2 6.5S3.57 3 5.5 3 9 4.57 9 6.5 7.43 10 5.5 10zm0-6C4.122 4 3 5.122 3 6.5S4.122 9 5.5 9 8 7.878 8 6.5 6.878 4 5.5 4zM13.5 15a.5.5 0 010-1c.276 0 .5-.224.5-.5a.5.5 0 011 0c0 .827-.673 1.5-1.5 1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 17c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-6c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.111 9.962a11.406 11.406 0 00-2.134-3.009c-1.249-1.257-2.549-1.949-3.662-1.949-.195 0-.434.023-.687.099.365-1.051.638-2.295-.068-3.32-.408-.593-1.074-1.024-2.035-1.32C9.51.151 8.194 0 6.5 0A6.508 6.508 0 000 6.5C0 10.935 1.738 13 5.469 13c.682 0 1.32-.098 1.912-.292-.529.694-.973 1.378-1.203 2.088-.405 1.248-.093 2.407.955 3.542.598.648 1.577 1.091 2.995 1.354 1.131.21 2.521.307 4.373.307 1.722 0 3.151-.675 4.131-1.953.883-1.151 1.357-2.723 1.369-4.544.007-1.105-.3-2.329-.889-3.541zm-16.99.829C1.367 9.916 1 8.512 1 6.5 1 3.467 3.467 1 6.5 1c1.57 0 2.826.141 3.731.419.727.223 1.234.537 1.505.931.567.824.11 2.019-.293 3.074-.128.335-.249.651-.33.941C10.049 10.157 8.203 12 5.469 12c-1.552 0-2.647-.395-3.348-1.209zM14.5 19c-2.317 0-5.526-.139-6.632-1.339-.802-.87-1.03-1.658-.739-2.556.285-.879 1.046-1.811 1.851-2.796 1.102-1.35 2.351-2.879 2.848-4.793.393-1.513 1.216-1.513 1.487-1.513.82 0 1.924.618 2.952 1.654 1.673 1.685 2.746 3.976 2.733 5.839-.018 2.66-1.21 5.503-4.5 5.503z"
  })));
}
LiniEggs.propTypes = {
  size: PropTypes.number.isRequired
};