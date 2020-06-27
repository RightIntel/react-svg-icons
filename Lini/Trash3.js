function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTrash3({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTrash3';

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
    d: "M11.5 3a.5.5 0 01-.5-.5v-1a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v1a.5.5 0 01-1 0v-1C7 .673 7.673 0 8.5 0h2c.827 0 1.5.673 1.5 1.5v1a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.51 2.69c-.282-.327-.689-.608-1.212-.833-.88-.38-2.11-.627-3.759-.754a.5.5 0 00-.077.997c1.516.117 2.673.344 3.44.675.168.072.31.147.431.221-1.167.536-3.647 1.005-6.832 1.005-3.213 0-5.686-.47-6.844-1.009.123-.077.269-.152.442-.227.765-.328 1.922-.553 3.44-.667a.5.5 0 00-.075-.997c-1.651.125-2.88.369-3.759.746-.523.224-.931.504-1.213.83a1.957 1.957 0 00-.491 1.31v2.515c0 .489.336.916 1 1.277v9.723c0 .307.134.763.77 1.193.396.268.949.504 1.643.702 1.366.39 3.172.605 5.087.605s3.722-.215 5.087-.605c.694-.198 1.246-.434 1.643-.702.637-.43.77-.886.77-1.193V7.779c.664-.361 1-.788 1-1.277v-2.5c0-.492-.165-.933-.49-1.31zM16 17.5c0 .117-.31.54-1.688.933-1.279.365-2.988.567-4.812.567s-3.534-.201-4.812-.567C3.31 18.039 3 17.617 3 17.5V8.193c.222.072.463.141.722.206C5.272 8.786 7.324 9 9.5 9s4.229-.213 5.778-.601c.259-.065.499-.134.722-.206V17.5zm1-11c0 .026-.065.16-.383.348-.356.211-.903.412-1.581.581C13.564 7.797 11.598 8 9.5 8s-4.063-.203-5.536-.571c-.678-.17-1.225-.37-1.581-.581C2.065 6.66 2 6.526 2 6.5V3.985c0-.061.004-.127.017-.197.733.39 1.747.643 2.549.796C5.997 4.856 7.704 5 9.5 5c3.261 0 6.08-.466 7.48-1.21.015.075.02.146.02.21v2.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 17.4a.5.5 0 01-.5-.5v-7a.5.5 0 011 0v7a.5.5 0 01-.5.5zM12.5 17.807a.5.5 0 01-.5-.5v-7a.5.5 0 011 0v7a.5.5 0 01-.5.5zM10.5 18a.5.5 0 01-.5-.5v-7a.5.5 0 011 0v7a.5.5 0 01-.5.5zM8.5 18a.5.5 0 01-.5-.5v-7a.5.5 0 011 0v7a.5.5 0 01-.5.5zM6.5 17.807a.5.5 0 01-.5-.5l.001-7a.5.5 0 011 0l-.001 7a.5.5 0 01-.5.5zM4.5 17.4a.5.5 0 01-.5-.5v-7a.5.5 0 011 0v7a.5.5 0 01-.5.5z"
  })));
}
LiniTrash3.propTypes = {
  size: PropTypes.number.isRequired
};