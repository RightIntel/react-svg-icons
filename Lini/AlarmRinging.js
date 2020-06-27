function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniAlarmRinging({
  size,
  ...props
}) {
  let className = 'Component Lini LiniAlarmRinging';

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
    d: "M16.8 15.101A4.466 4.466 0 0115 11.5v-3a5.51 5.51 0 00-4-5.292V2.5c0-.827-.673-1.5-1.5-1.5S8 1.673 8 2.5v.708A5.51 5.51 0 004 8.5v3a4.468 4.468 0 01-1.8 3.601.5.5 0 00.3.9h4.55a2.503 2.503 0 002.449 3 2.503 2.503 0 002.45-3h4.55a.5.5 0 00.3-.9zM9 2.5a.5.5 0 011 0v.523a5.508 5.508 0 00-1 0V2.5zm2 14c0 .827-.673 1.5-1.5 1.5a1.502 1.502 0 01-1.414-2h2.828c.056.16.086.329.086.5zM3.742 15c.255-.309.477-.646.659-1.001A5.435 5.435 0 005 11.5v-3C5 6.019 7.019 4 9.5 4S14 6.019 14 8.5v3a5.448 5.448 0 001.258 3.5H3.741zM17.248 7a.5.5 0 01-.484-.376 7.47 7.47 0 00-2.311-3.757.501.501 0 01.661-.751 8.465 8.465 0 012.619 4.258.5.5 0 01-.485.625zM18.501 4.636a.5.5 0 01-.45-.282 9.478 9.478 0 00-.95-1.554.5.5 0 01.799-.601c.404.537.757 1.115 1.049 1.718a.5.5 0 01-.449.718zM1.752 7a.501.501 0 01-.485-.625 8.46 8.46 0 012.619-4.258.501.501 0 01.661.751 7.47 7.47 0 00-2.311 3.757.5.5 0 01-.484.376zM.499 4.636a.5.5 0 01-.449-.718C.343 3.315.696 2.737 1.099 2.2a.5.5 0 11.799.601 9.547 9.547 0 00-.95 1.554.5.5 0 01-.45.282z"
  })));
}
LiniAlarmRinging.propTypes = {
  size: PropTypes.number.isRequired
};