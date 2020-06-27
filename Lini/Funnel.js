function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFunnel({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFunnel';

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
    d: "M16.23 3.307c-.396-.268-.949-.504-1.643-.702C13.221 2.215 11.415 2 9.5 2s-3.722.215-5.087.605c-.694.198-1.246.434-1.643.702-.637.43-.77.886-.77 1.193V5c0 .428.321 1.133.639 1.609l4.891 7.336c.251.376.471 1.103.471 1.555v3a.5.5 0 00.724.447l2-1a.5.5 0 00.276-.447v-2c0-.452.22-1.179.471-1.555l4.891-7.336c.317-.476.639-1.182.639-1.609v-.5c0-.307-.134-.763-.77-1.193zm-11.542.26C5.967 3.202 7.676 3 9.5 3s3.534.201 4.812.567C15.69 3.961 16 4.383 16 4.5s-.31.54-1.688.933C13.033 5.798 11.324 6 9.5 6s-3.534-.201-4.812-.567C3.31 5.039 3 4.617 3 4.5s.31-.54 1.688-.933zm5.951 9.824c-.358.537-.639 1.464-.639 2.109v1.691l-1 .5V15.5c0-.646-.281-1.572-.639-2.109l-4.88-7.32c.274.117.585.226.932.324C5.779 6.785 7.585 7 9.5 7s3.722-.215 5.087-.605c.346-.099.658-.207.932-.325l-4.88 7.32z"
  })));
}
LiniFunnel.propTypes = {
  size: PropTypes.number.isRequired
};