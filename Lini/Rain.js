function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniRain({
  size,
  ...props
}) {
  let className = 'Component Lini LiniRain';

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
    d: "M2.5 9c-.668 0-1.296-.26-1.768-.732a2.503 2.503 0 010-3.536c.554-.554 1.757-1.051 3.151-1.626.81-.334 1.647-.68 2.393-1.053a.499.499 0 01.671.671c-.373.746-.719 1.584-1.053 2.393-.575 1.394-1.072 2.597-1.626 3.151C3.796 8.74 3.168 9 2.5 9zm2.979-5.479c-.403.174-.812.343-1.214.509-1.186.49-2.413.996-2.825 1.409A1.501 1.501 0 003.562 7.56c.413-.413.919-1.639 1.409-2.825.166-.402.335-.811.509-1.214zM15.5 18c-.668 0-1.296-.26-1.768-.732a2.503 2.503 0 010-3.536c.554-.554 1.757-1.051 3.151-1.626.81-.334 1.647-.68 2.393-1.053a.5.5 0 01.671.671c-.373.746-.719 1.584-1.053 2.393-.575 1.394-1.072 2.597-1.626 3.151-.472.472-1.1.732-1.768.732zm2.979-5.479c-.403.174-.812.343-1.214.509-1.186.49-2.413.996-2.825 1.409a1.501 1.501 0 002.122 2.121c.413-.413.919-1.639 1.409-2.825.166-.402.335-.811.509-1.214zM13.5 7c-.668 0-1.296-.26-1.768-.732a2.503 2.503 0 010-3.536c.554-.554 1.757-1.051 3.151-1.626.81-.334 1.647-.68 2.393-1.053a.499.499 0 01.671.671c-.373.746-.719 1.584-1.053 2.393-.575 1.394-1.072 2.597-1.626 3.151-.472.472-1.1.732-1.768.732zm2.979-5.479c-.403.174-.812.343-1.214.509-1.186.49-2.413.996-2.825 1.409a1.501 1.501 0 002.122 2.121c.413-.413.919-1.639 1.409-2.825.166-.402.335-.811.509-1.214zM4.5 20c-.668 0-1.296-.26-1.768-.732a2.503 2.503 0 010-3.536c.554-.554 1.757-1.051 3.151-1.626.81-.334 1.647-.68 2.393-1.053a.5.5 0 01.671.671c-.373.746-.719 1.584-1.053 2.393-.575 1.394-1.072 2.597-1.626 3.151-.472.472-1.1.732-1.768.732zm2.979-5.479c-.403.174-.812.343-1.214.509-1.186.49-2.413.996-2.825 1.409a1.501 1.501 0 002.122 2.121c.413-.413.919-1.639 1.409-2.825.166-.402.335-.811.509-1.214z"
  })));
}
LiniRain.propTypes = {
  size: PropTypes.number.isRequired
};