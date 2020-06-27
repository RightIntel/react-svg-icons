function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFingersCrossed({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFingersCrossed';

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
    d: "M18.23 8.447c-.42-.328-.944-.472-1.474-.404s-1 .339-1.324.762l-1.222 1.598-1.085-3.837 1.397-2.628c.251-.472.303-1.013.147-1.524s-.502-.93-.974-1.181a2.002 2.002 0 00-2.307.308 2.026 2.026 0 00-1.886-.463c-.514.138-.945.47-1.211.934s-.337 1.003-.197 1.517l.715 2.636-1.325 2.493A1.995 1.995 0 006.002 8c-.871 0-1.614.56-1.887 1.339A2.002 2.002 0 001.002 11v2c0 1.404.559 3.115 1.459 4.465C3.551 19.1 4.986 20 6.502 20h4c1.083 0 2.204-.662 3.426-2.025.967-1.077 1.811-2.388 2.428-3.345.216-.336.403-.625.556-.845l1.746-2.505a2.11 2.11 0 00-.426-2.834zm-5.005-6.331c.236.125.409.335.487.591s.052.526-.073.762l-.908 1.707-.762-2.697a5.721 5.721 0 00-.021-.068 1.001 1.001 0 011.278-.294zM5 10c0-.551.449-1 1-1s1 .449 1 1v3c0 .551-.449 1-1 1s-1-.449-1-1v-3zm-3 1c0-.551.449-1 1-1s1 .449 1 1v2c0 .551-.449 1-1 1s-1-.449-1-1v-2zm15.836-.291l-1.746 2.505c-.163.234-.355.531-.576.875C14.408 15.805 12.35 19 10.5 19h-4c-1.58 0-2.689-1.309-3.209-2.09a8.213 8.213 0 01-.966-2.027 1.996 1.996 0 002.175-.562c.367.416.903.679 1.5.679 1.103 0 2-.897 2-2v-3c0-.058-.003-.115-.008-.172l1.197-2.252.828 3.055a.5.5 0 10.965-.261L9.057 3.269c-.069-.256-.034-.525.099-.757s.348-.398.604-.467a1.023 1.023 0 011.245.707l2.512 8.885a.5.5 0 00.878.168l1.829-2.391c.161-.21.394-.344.657-.378s.523.037.731.2c.439.343.54 1.018.222 1.474z"
  })));
}
LiniFingersCrossed.propTypes = {
  size: PropTypes.number.isRequired
};