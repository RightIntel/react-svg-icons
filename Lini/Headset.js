function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHeadset({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHeadset';

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
    d: "M18.5 13.028a.5.5 0 01-.5-.5V9c0-5.084-2.916-8-8-8S2 3.916 2 9v3.528a.5.5 0 01-1 0V9c0-1.514.237-2.874.704-4.045a7.44 7.44 0 011.953-2.828C5.214.735 7.407 0 10.001 0s4.787.736 6.344 2.127a7.462 7.462 0 011.953 2.828c.467 1.17.704 2.531.704 4.045v3.528a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 8a1.5 1.5 0 00-1.418 1.013c-1.103.068-1.894.414-2.409 1.052C2.214 10.635 2 11.409 2 12.5s.214 1.865.673 2.435c.515.639 1.305.984 2.409 1.052A1.502 1.502 0 006.5 17c.827 0 1.5-.673 1.5-1.5v-6C8 8.673 7.327 8 6.5 8zM3 12.5c0-1.411.35-2.331 2-2.479v4.958c-1.65-.148-2-1.068-2-2.479zm4 3a.5.5 0 01-1 0v-6a.5.5 0 011 0v6zM17.327 10.065c-.515-.639-1.305-.984-2.408-1.052A1.502 1.502 0 0013.501 8c-.827 0-1.5.673-1.5 1.5v6a1.5 1.5 0 002.918.487c.892-.055 1.579-.292 2.082-.718v1.23c0 .827-.673 1.5-1.5 1.5h-3.586c-.206-.582-.762-1-1.414-1-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5c.652 0 1.208-.418 1.414-1h3.586c1.378 0 2.5-1.122 2.5-2.5v-4c0-1.091-.214-1.865-.673-2.435zM10.5 19a.5.5 0 110-1 .5.5 0 010 1zm3-3a.5.5 0 01-.5-.5v-6a.5.5 0 011 0v6a.5.5 0 01-.5.5zm1.5-1.021v-4.958c1.65.148 2 1.068 2 2.479s-.35 2.331-2 2.479z"
  })));
}
LiniHeadset.propTypes = {
  size: PropTypes.number.isRequired
};