import React from 'react';
import PropTypes from 'prop-types';
export default function LiniJump2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniJump2';

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
    d: "M17.5 8a.5.5 0 00-.5.5v2.652A10.49 10.49 0 009.5 8a10.39 10.39 0 00-4.77 1.144 10.597 10.597 0 00-3.63 3.055.5.5 0 00.799.6A9.426 9.426 0 019.499 9a9.49 9.49 0 016.928 3h-2.928a.5.5 0 000 1h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 15c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"
  })));
}
LiniJump2.propTypes = {
  size: PropTypes.number.isRequired
};