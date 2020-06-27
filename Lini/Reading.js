import React from 'react';
import PropTypes from 'prop-types';
export default function LiniReading({
  size,
  ...props
}) {
  let className = 'Component Lini LiniReading';

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
    d: "M18.5 5c-.049 0-1.218.006-2.955.521-1.515.449-3.764 1.386-6.045 3.318C7.219 6.908 4.969 5.97 3.455 5.521 1.718 5.006.549 5 .5 5a.5.5 0 00-.5.5v10a.498.498 0 00.5.5c.043 0 4.36.044 8.668 3.874a.5.5 0 00.664 0c2.241-1.992 4.476-2.939 5.957-3.382C17.398 16.01 18.49 16 18.5 16a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5zM1 9h.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H1V9zm0 6.029V13h.5c.827 0 1.5-.673 1.5-1.5v-2C3 8.673 2.327 8 1.5 8H1V6.035c1.241.131 4.606.751 8 3.692v8.704c-2.106-1.658-4.141-2.494-5.545-2.91A12.988 12.988 0 001 15.03zm14.545.492c-1.404.416-3.439 1.252-5.545 2.91V9.727c2.184-1.891 4.345-2.803 5.789-3.235.962-.288 1.74-.408 2.211-.457V8h-.5c-.827 0-1.5.673-1.5 1.5v2c0 .827.673 1.5 1.5 1.5h.5v2.029c-.507.047-1.37.17-2.455.491zM18 9v3h-.5a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 7C11.43 7 13 5.43 13 3.5S11.43 0 9.5 0 6 1.57 6 3.5 7.57 7 9.5 7zm0-6C10.878 1 12 2.122 12 3.5S10.878 6 9.5 6 7 4.878 7 3.5 8.122 1 9.5 1z"
  })));
}
LiniReading.propTypes = {
  size: PropTypes.number.isRequired
};