function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSignalLock({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSignalLock';

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
    d: "M18.5 19h-2a.5.5 0 01-.5-.5v-17a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v17a.5.5 0 01-.5.5zM17 18h1V2h-1v16zM14.5 19h-2a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v12a.5.5 0 01-.5.5zM13 18h1V7h-1v11zM10.5 19h-2a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v8a.5.5 0 01-.5.5zM9 18h1v-7H9v7zM6.5 19h-2a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v5a.5.5 0 01-.5.5zM5 18h1v-4H5v4zM2.5 19h-2a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zM1 18h1v-2H1v2zM6 4.086V3.5C6 2.122 4.878 1 3.5 1S1 2.122 1 3.5v.586c-.582.206-1 .762-1 1.414v3C0 9.327.673 10 1.5 10h4C6.327 10 7 9.327 7 8.5v-3c0-.652-.418-1.208-1-1.414zM3.5 2C4.327 2 5 2.673 5 3.5V4H2v-.5C2 2.673 2.673 2 3.5 2zM6 8.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v3z"
  })));
}
LiniSignalLock.propTypes = {
  size: PropTypes.number.isRequired
};