function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBubbleQuote({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBubbleQuote';

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
    d: "M.5 19a.5.5 0 01-.257-.929 6.211 6.211 0 002.641-3.179C1.046 13.485 0 11.538 0 9.5c0-1.029.258-2.026.768-2.964.486-.894 1.18-1.695 2.061-2.381C4.616 2.765 6.985 1.999 9.5 1.999s4.884.766 6.671 2.156c.881.685 1.575 1.486 2.061 2.381.51.937.768 1.934.768 2.964s-.258 2.026-.768 2.964c-.486.894-1.18 1.695-2.061 2.381-1.787 1.39-4.156 2.156-6.671 2.156-1.033 0-2.047-.129-3.016-.385a20.74 20.74 0 01-2.189 1.27c-1.488.74-2.764 1.115-3.794 1.115zm9-16C4.813 3 1 5.916 1 9.5c0 1.815 1.005 3.562 2.756 4.792.172.121.25.336.196.539-.117.436-.515 1.633-1.58 2.788 1.302-.456 2.704-1.247 3.739-1.959a.499.499 0 01.421-.069C7.48 15.862 8.479 16 9.5 16c4.687 0 8.5-2.916 8.5-6.5S14.187 3 9.5 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 8c-.17 0-.336.017-.497.05A3.493 3.493 0 018.5 7a.5.5 0 000-1A4.505 4.505 0 004 10.5C4 11.878 5.122 13 6.5 13S9 11.878 9 10.5 7.878 8 6.5 8zm0 4c-.827 0-1.5-.673-1.5-1.5S5.673 9 6.5 9 8 9.673 8 10.5 7.327 12 6.5 12zM12.5 8c-.17 0-.336.017-.497.05A3.493 3.493 0 0114.5 7a.5.5 0 000-1 4.505 4.505 0 00-4.5 4.5c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5S13.878 8 12.5 8zm0 4c-.827 0-1.5-.673-1.5-1.5S11.673 9 12.5 9s1.5.673 1.5 1.5-.673 1.5-1.5 1.5z"
  })));
}
LiniBubbleQuote.propTypes = {
  size: PropTypes.number.isRequired
};