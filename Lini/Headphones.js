function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHeadphones({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHeadphones';

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
    d: "M18.5 15.028a.5.5 0 01-.5-.5V11c0-5.084-2.916-8-8-8s-8 2.916-8 8v3.528a.5.5 0 01-1 0V11c0-1.514.237-2.874.704-4.045a7.44 7.44 0 011.953-2.828C5.214 2.735 7.407 2 10.001 2s4.787.736 6.344 2.127a7.462 7.462 0 011.953 2.828c.467 1.17.704 2.531.704 4.045v3.528a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 10a1.5 1.5 0 00-1.418 1.013c-1.103.068-1.894.414-2.409 1.052C2.214 12.635 2 13.409 2 14.5s.214 1.865.673 2.435c.515.639 1.305.984 2.409 1.052A1.502 1.502 0 006.5 19c.827 0 1.5-.673 1.5-1.5v-6c0-.827-.673-1.5-1.5-1.5zM3 14.5c0-1.411.35-2.331 2-2.479v4.958c-1.65-.148-2-1.068-2-2.479zm4 3a.5.5 0 01-1 0v-6a.5.5 0 011 0v6zM17.327 12.065c-.515-.639-1.305-.984-2.408-1.052A1.502 1.502 0 0013.501 10c-.827 0-1.5.673-1.5 1.5v6a1.5 1.5 0 002.918.487c1.103-.068 1.894-.414 2.408-1.052.459-.57.673-1.344.673-2.435s-.214-1.865-.673-2.435zM13.5 18a.5.5 0 01-.5-.5v-6a.5.5 0 011 0v6a.5.5 0 01-.5.5zm1.5-1.021v-4.958c1.65.148 2 1.068 2 2.479s-.35 2.331-2 2.479z"
  })));
}
LiniHeadphones.propTypes = {
  size: PropTypes.number.isRequired
};