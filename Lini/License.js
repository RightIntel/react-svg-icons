function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniLicense({
  size,
  ...props
}) {
  let className = 'Component Lini LiniLicense';

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
    d: "M16.5 20h-13c-.827 0-1.5-.673-1.5-1.5v-16C2 1.673 2.673 1 3.5 1h13c.827 0 1.5.673 1.5 1.5v16c0 .827-.673 1.5-1.5 1.5zM3.5 2a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5h-13z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.943 5.544l-.813-.591-.311-.956h-1.005l-.813-.591-.813.591h-1.005l-.311.956-.813.591.311.956-.311.956.813.591.132.406c-.002.016-.002.031-.002.047v8a.5.5 0 00.854.354l1.146-1.146 1.146 1.146a.494.494 0 00.545.108.5.5 0 00.309-.462v-8A.708.708 0 0015 8.453l.132-.406.813-.591-.311-.956.311-.956zm-4.71.382l.488-.355.187-.574h.604L13 4.642l.488.355h.604l.187.574.488.355-.187.574.187.574-.488.355-.187.574h-.604L13 8.358l-.488-.355h-.604l-.187-.574-.488-.355.187-.574-.187-.574zm2.121 8.72a.5.5 0 00-.707 0l-.646.646v-6.29h.187l.813.591.813-.591h.187v6.29l-.646-.646z"
  })));
}
LiniLicense.propTypes = {
  size: PropTypes.number.isRequired
};