import React from 'react';
import PropTypes from 'prop-types';
export default function LiniLoudspeaker({
  size,
  ...props
}) {
  let className = 'Component Lini LiniLoudspeaker';

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
    d: "M15.5 20h-11c-.827 0-1.5-.673-1.5-1.5v-16C3 1.673 3.673 1 4.5 1h11c.827 0 1.5.673 1.5 1.5v16c0 .827-.673 1.5-1.5 1.5zM4.5 2a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5h-11z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 7c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1c.551 0 1-.449 1-1s-.449-1-1-1zM10 18c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-9c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 15c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1c.551 0 1-.449 1-1s-.449-1-1-1z"
  })));
}
LiniLoudspeaker.propTypes = {
  size: PropTypes.number.isRequired
};