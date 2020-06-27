import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGestureZoom2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGestureZoom2';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 17.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 10.5a1.502 1.502 0 00-2.053-1.394 1.501 1.501 0 00-2-1A1.502 1.502 0 0012 7.086V4.5c0-.827-.673-1.5-1.5-1.5S9 3.673 9 4.5v5.966L7.594 9.353c-.304-.241-.694-.361-1.098-.339s-.779.186-1.053.46a1.508 1.508 0 00-.003 2.12l3.479 3.523c-.54.227-.919.762-.919 1.383v2c0 .827.673 1.5 1.5 1.5h7c.827 0 1.5-.673 1.5-1.5v-2a1.5 1.5 0 00-.719-1.28c.328-.636.719-1.798.719-3.72v-1zm-11.85-.318a.653.653 0 01.823-.044l2.216 1.754a.499.499 0 00.81-.392v-7a.5.5 0 011 0v5a.5.5 0 001 0v-1a.5.5 0 011 0v1a.5.5 0 001 0 .5.5 0 011 0v1a.5.5 0 001 0 .5.5 0 011 0v1c0 2.102-.516 3.139-.748 3.5h-6.043l-4.057-4.108a.512.512 0 01-.002-.71zM17 18.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v2zM4.507 7h-1.8L7 2.707V4.5a.5.5 0 001 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 000 1h1.793L2 6.293V4.5a.5.5 0 00-1 0v3a.5.5 0 00.5.5h3.007a.5.5 0 000-1z"
  })));
}
LiniGestureZoom2.propTypes = {
  size: PropTypes.number.isRequired
};