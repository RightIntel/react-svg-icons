function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTree({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTree';

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
    d: "M16.975 6.407a6.959 6.959 0 00-2.113-4.443A6.963 6.963 0 0010 0C8.13 0 6.372.728 5.05 2.05a6.95 6.95 0 00-2.025 4.355A5.008 5.008 0 000 11a5.006 5.006 0 007.464 4.352c.1-.057.197-.117.292-.18.635 1.562.142 2.387-.297 3.122-.236.396-.46.769-.46 1.206a.5.5 0 00.5.5h5a.5.5 0 00.5-.5c0-.437-.223-.81-.46-1.206-.439-.735-.931-1.559-.298-3.12A5.006 5.006 0 0019.998 11a5.006 5.006 0 00-3.025-4.593zM8.204 19c.036-.063.075-.127.114-.193.502-.839 1.251-2.094.241-4.296.177-.179.34-.371.488-.575a7.052 7.052 0 001.905 0c.149.206.313.399.488.577-1.008 2.201-.259 3.455.242 4.294.039.066.078.13.114.193H8.204zM15 15a3.984 3.984 0 01-3.409-1.903l-.011-.016-.015-.018-.018-.021-.007-.007a.499.499 0 00-.242-.132l-.008-.001-.04-.007-.008-.001c-.014-.001-.027-.003-.041-.003h-.006l-.044.001-.004.001a.362.362 0 00-.046.006H11.1a6.114 6.114 0 01-2.073.021.5.5 0 00-.627.192l-.002.003-.001.002a3.979 3.979 0 01-3.394 1.882c-2.206 0-4-1.794-4-4 0-1.452.789-2.774 2.02-3.476.027.368.083.734.167 1.091a.5.5 0 00.973-.23A6.007 6.007 0 0110.002.999a5.976 5.976 0 015.931 5.087 5.015 5.015 0 00-1.486-.056.5.5 0 00.11.994A4.004 4.004 0 0119.002 11c0 2.206-1.794 4-4 4z"
  })));
}
LiniTree.propTypes = {
  size: PropTypes.number.isRequired
};