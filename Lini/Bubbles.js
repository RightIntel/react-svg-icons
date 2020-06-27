function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBubbles({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBubbles';

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
    d: "M19.501 18H19.5c-1.341 0-2.734-.856-3.247-1.206A7.463 7.463 0 0114.5 17c-1.437 0-2.795-.396-3.822-1.116C9.596 15.127 9 14.102 9 13s.596-2.127 1.678-2.884C11.706 9.397 13.063 9 14.5 9s2.795.396 3.822 1.116C19.404 10.873 20 11.898 20 13c0 .964-.461 1.877-1.306 2.597.082.231.339.727 1.145 1.535A.5.5 0 0119.5 18zm-3.148-2.248c.108 0 .214.035.302.101.01.007.675.504 1.503.842-.544-.795-.53-1.248-.481-1.438a.504.504 0 01.183-.273c.735-.552 1.139-1.256 1.139-1.984 0-.767-.444-1.5-1.251-2.065-.861-.603-2.015-.935-3.249-.935s-2.388.332-3.249.935c-.807.565-1.251 1.298-1.251 2.065s.444 1.5 1.251 2.065c.861.603 2.015.935 3.249.935.595 0 1.173-.077 1.718-.23a.516.516 0 01.135-.018z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M.5 19a.5.5 0 01-.257-.929 6.211 6.211 0 002.641-3.179C1.046 13.485 0 11.538 0 9.5c0-1.029.258-2.026.768-2.964.486-.894 1.18-1.695 2.061-2.381C4.616 2.765 6.985 1.999 9.5 1.999c2.278 0 4.481.644 6.202 1.814 1.735 1.179 2.871 2.811 3.199 4.595a.5.5 0 01-.983.181c-.279-1.519-1.266-2.921-2.778-3.949-1.557-1.058-3.56-1.641-5.64-1.641-4.687 0-8.5 2.916-8.5 6.5 0 1.815 1.005 3.562 2.756 4.792.172.121.25.336.196.539-.117.436-.515 1.633-1.58 2.788 1.302-.456 2.704-1.247 3.739-1.959a.499.499 0 01.421-.069c.948.271 1.947.409 2.968.409a.5.5 0 010 1c-1.033 0-2.047-.129-3.016-.385a20.74 20.74 0 01-2.189 1.27c-1.488.74-2.764 1.115-3.794 1.115z"
  })));
}
LiniBubbles.propTypes = {
  size: PropTypes.number.isRequired
};