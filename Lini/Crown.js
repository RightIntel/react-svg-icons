function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCrown({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCrown';

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
    d: "M19 7.5c0-.827-.673-1.5-1.5-1.5S16 6.673 16 7.5a1.5 1.5 0 00.741 1.293c-.279 1.116-1.011 4.163-1.431 7.089-.594-.205-1.409-.353-2.307-.453.05-2.665.673-7.978.854-9.472A1.503 1.503 0 0015 4.5c0-.827-.673-1.5-1.5-1.5S12 3.673 12 4.5c0 .599.353 1.117.861 1.357-.186 1.528-.796 6.726-.856 9.481A34.167 34.167 0 0010 15.254V2.915c.582-.206 1-.762 1-1.414 0-.827-.673-1.5-1.5-1.5S8 .674 8 1.501c0 .652.418 1.208 1 1.414v12.339c-.652.009-1.337.036-2.005.084-.06-2.755-.671-7.953-.856-9.481C6.647 5.617 7 5.099 7 4.5 7 3.673 6.327 3 5.5 3S4 3.673 4 4.5c0 .704.488 1.296 1.143 1.457.181 1.494.804 6.807.854 9.472-.898.101-1.713.248-2.307.453-.421-2.926-1.152-5.973-1.431-7.089A1.5 1.5 0 001.5 6C.673 6 0 6.673 0 7.5c0 .751.554 1.374 1.275 1.483C1.648 10.476 3 16.129 3 19.5a.5.5 0 00.723.447c.834-.417 3.155-.697 5.776-.697s4.942.28 5.776.697a.505.505 0 00.487-.022.5.5 0 00.237-.425c0-3.371 1.353-9.024 1.725-10.517A1.503 1.503 0 0018.999 7.5zM13.5 4a.5.5 0 110 1 .5.5 0 010-1zm-8 0a.5.5 0 110 1 .5.5 0 010-1zm4-3a.5.5 0 110 1 .5.5 0 010-1zM1 7.5a.5.5 0 111 0 .5.5 0 01-1 0zm8.5 10.75c-1.865 0-4.131.147-5.517.541a26.345 26.345 0 00-.16-1.89c.908-.391 3.153-.651 5.677-.651s4.768.26 5.677.651a26.296 26.296 0 00-.16 1.89c-1.386-.393-3.652-.541-5.517-.541zM17.5 8a.5.5 0 110-1 .5.5 0 010 1z"
  })));
}
LiniCrown.propTypes = {
  size: PropTypes.number.isRequired
};