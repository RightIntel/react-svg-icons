import React from 'react';
import PropTypes from 'prop-types';
export default function LiniJoystick({
  size,
  ...props
}) {
  let className = 'Component Lini LiniJoystick';

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
    d: "M13 3.5C13 1.57 11.43 0 9.5 0S6 1.57 6 3.5a3.505 3.505 0 003 3.464V11.5a.5.5 0 001 0V6.964A3.505 3.505 0 0013 3.5zM9.5 6C8.122 6 7 4.878 7 3.5S8.122 1 9.5 1 12 2.122 12 3.5 10.878 6 9.5 6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 2.5a.5.5 0 11-1 0 .5.5 0 011 0zM9.5 14c-.642 0-1.251-.192-1.714-.539C7.287 13.086 7 12.554 7 12c0-.52.244-1.012.688-1.383a.5.5 0 11.642.766c-.151.126-.331.336-.331.617 0 .542.687 1 1.5 1s1.5-.458 1.5-1c0-.281-.18-.491-.331-.617a.5.5 0 11.642-.766c.444.372.688.863.688 1.383 0 .554-.286 1.086-.786 1.461-.464.348-1.073.539-1.714.539z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.829 11.106l-6.106-3.053a.5.5 0 00-.447.895l6.106 3.053a.938.938 0 01.246.187l-7.494 4.142c-.331.183-.935.183-1.267 0l-7.495-4.142a.938.938 0 01.246-.187l6.106-3.053a.5.5 0 00-.447-.895l-6.106 3.053C.514 11.434 0 12.266 0 13v.5c0 .734.478 1.566 1.112 1.936l7.272 4.242c.313.183.714.274 1.116.274s.803-.091 1.116-.274l7.272-4.242C18.522 15.066 19 14.234 19 13.5V13c0-.734-.514-1.566-1.171-1.894zm-.445 3.466l-7.273 4.242c-.32.187-.903.187-1.224 0l-7.272-4.242c-.322-.188-.616-.699-.616-1.072v-.376l7.383 4.08c.318.176.718.264 1.117.264s.799-.088 1.117-.264l7.383-4.08v.376c0 .373-.293.884-.616 1.072z"
  })));
}
LiniJoystick.propTypes = {
  size: PropTypes.number.isRequired
};