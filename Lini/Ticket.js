import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTicket({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTicket';

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
    d: "M19.5 16H.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5c.827 0 1.5-.673 1.5-1.5S1.327 9 .5 9a.5.5 0 01-.5-.5v-3A.5.5 0 01.5 5h19a.5.5 0 01.5.5v3a.5.5 0 01-.5.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zM1 15h18v-2.05c-1.14-.232-2-1.242-2-2.45s.86-2.217 2-2.45V6H1v2.05c1.14.232 2 1.242 2 2.45s-.86 2.217-2 2.45V15z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 14h-11a.5.5 0 01-.5-.5v-6a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v6a.5.5 0 01-.5.5zM5 13h10V8H5v5z"
  })));
}
LiniTicket.propTypes = {
  size: PropTypes.number.isRequired
};