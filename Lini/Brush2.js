function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBrush2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBrush2';

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
    d: "M3.5 17c-.132 0-.261-.053-.353-.147S3 16.631 3 16.5a.5.5 0 11.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.646 9.439L10.56 1.353c-.283-.283-.659-.438-1.061-.438s-.778.156-1.061.438L3.352 6.439c-.539.539-.695 1.496-.354 2.179l1.606 3.211c.049.099.058.193.024.265s-.111.127-.219.152c-.086.021-2.129.521-3.386 1.778-.661.661-1.025 1.54-1.025 2.475s.364 1.814 1.025 2.475a3.477 3.477 0 002.475 1.025c.935 0 1.814-.364 2.475-1.025 1.257-1.257 1.758-3.3 1.778-3.386.021-.089.082-.239.249-.239.053 0 .11.015.169.045L11.38 17c.238.119.517.182.808.182.523 0 1.035-.2 1.37-.535l5.086-5.086a1.501 1.501 0 000-2.121zm-5.792 6.5c-.147.147-.408.242-.663.242a.808.808 0 01-.361-.076l-3.211-1.606c-.199-.1-.407-.15-.616-.15-.586 0-1.077.404-1.221 1.006-.004.018-.458 1.858-1.513 2.912-.472.472-1.1.732-1.768.732s-1.296-.26-1.768-.732-.732-1.1-.732-1.768.26-1.296.732-1.768c1.055-1.055 2.894-1.509 2.912-1.513.404-.097.729-.353.892-.702s.15-.763-.036-1.135L3.895 8.17c-.15-.299-.07-.788.166-1.024L5 6.207 13.793 15l-.939.939zm5.085-5.085L14.5 14.293 5.707 5.5l3.439-3.439c.094-.094.219-.145.354-.145s.26.052.354.145l8.086 8.086a.5.5 0 010 .707z"
  })));
}
LiniBrush2.propTypes = {
  size: PropTypes.number.isRequired
};