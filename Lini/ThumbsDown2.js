function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniThumbsDown2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniThumbsDown2';

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
    d: "M19.436 11.745c-.487.868-1.145 1.069-1.834 1.213-.381.08-1.006.064-1.668.047-.424-.011-1.061-.027-1.233.016a.705.705 0 00-.339.431c-.094.319-.073.917.564 1.959.212.347.34.942.342 1.589.002.723-.154 1.401-.438 1.907-.401.715-1.034 1.092-1.831 1.092a.5.5 0 01-.449-.28 288.844 288.844 0 01-1.956-4.191 207.454 207.454 0 00-1.542-3.306c-.046-.091-.086-.176-.125-.258-.193-.404-.288-.588-.52-.713-.271-.147-.751-.226-1.496-.247a1.503 1.503 0 01-1.412.995h-4c-.827 0-1.5-.673-1.5-1.5v-8c0-.827.673-1.5 1.5-1.5h4c.649 0 1.204.415 1.412.994.58-.018 1.66-.082 2.445-.316a15.765 15.765 0 014.643-.674h.032c1.259 0 2.17.001 2.917.205.821.224 1.409.677 1.968 1.515C19.256 3.232 20 5.142 20 7.5c0 1.951 0 3.24-.564 4.245zM5.5 2h-4a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5zm12.584 1.277c-.848-1.271-1.592-1.274-4.051-1.274H14c-1.549 0-2.893.195-4.357.632-.869.26-2 .335-2.643.357v7.016c.896.029 1.473.143 1.884.365.528.286.731.711.946 1.162l.117.242c.222.444.87 1.848 1.556 3.334.648 1.403 1.371 2.972 1.794 3.856.28-.07.494-.248.661-.547.198-.354.311-.87.31-1.416-.001-.495-.099-.913-.195-1.07-.666-1.088-.891-2.019-.67-2.765.198-.668.682-.961.881-1.056.268-.128.694-.131 1.676-.106.522.013 1.17.03 1.438-.026.646-.135.905-.259 1.166-.724C19 10.48 19 9.295 19 7.502c0-2.147-.681-3.87-.916-4.223z"
  })));
}
LiniThumbsDown2.propTypes = {
  size: PropTypes.number.isRequired
};