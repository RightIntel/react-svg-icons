import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEgg({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEgg';

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
    d: "M9.5 20c-2.003 0-3.887-.78-5.303-2.197S2 14.503 2 12.5c0-1.874.359-3.694 1.066-5.408a14.536 14.536 0 013.187-4.743c.865-.865 2.018-1.342 3.247-1.342s2.381.477 3.247 1.342a14.52 14.52 0 013.187 4.743A14.094 14.094 0 0117 12.5c0 2.003-.78 3.887-2.197 5.303S11.503 20 9.5 20zm0-17.994c-.961 0-1.863.373-2.539 1.049C4.407 5.609 3 8.963 3 12.5 3 16.084 5.916 19 9.5 19s6.5-2.916 6.5-6.5c0-3.536-1.407-6.891-3.961-9.445A3.564 3.564 0 009.5 2.006z"
  })));
}
LiniEgg.propTypes = {
  size: PropTypes.number.isRequired
};