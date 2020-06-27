function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBagPound({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBagPound';

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
    d: "M15.733 10.136c-.716-1.203-1.626-2.21-2.358-3.018-.539-.596-1.093-1.208-1.291-1.633.331-.193.556-.418.77-.631a.5.5 0 00-.628-.771 4.476 4.476 0 011.575-2.182.5.5 0 00.148-.622c-.026-.053-.653-1.289-1.948-1.289-.81 0-1.063.51-1.198.783-.108.218-.112.227-.302.227-.378 0-.809-.219-1.266-.451C8.693.274 8.133-.01 7.516-.01h-.02c-1.17.012-2.231 1.04-2.348 1.157a.5.5 0 00.054.754 4.434 4.434 0 011.56 2.141l.014.041a.5.5 0 00-.627.772c.213.213.438.438.77.632-.197.424-.752 1.036-1.292 1.633-.732.809-1.643 1.815-2.358 3.018-.852 1.433-1.267 2.861-1.267 4.364 0 2.046.755 3.536 2.243 4.429 1.218.731 2.889 1.071 5.257 1.071s4.039-.34 5.257-1.071c1.488-.893 2.243-2.383 2.243-4.429 0-1.503-.414-2.931-1.267-4.364zM6.278 1.501c.343-.248.809-.507 1.227-.511h.01c.378 0 .809.219 1.266.451C9.323 1.716 9.883 2 10.5 2c.81 0 1.063-.51 1.198-.783.108-.218.112-.227.302-.227.367 0 .647.218.825.417a5.493 5.493 0 00-1.792 3.437c-.359.098-.843.157-1.533.157s-1.174-.059-1.533-.157a5.497 5.497 0 00-1.689-3.342zM9.5 19C4.944 19 3 17.654 3 14.5c0-2.992 1.946-5.141 3.366-6.711.69-.762 1.24-1.37 1.486-1.947C8.276 5.94 8.81 6 9.5 6s1.224-.06 1.648-.158c.246.577.796 1.185 1.485 1.947 1.421 1.57 3.366 3.719 3.366 6.711 0 3.154-1.944 4.5-6.5 4.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 16H8v-2h1.5a.5.5 0 000-1H8v-.5c0-.799.763-1.5 1.634-1.5.579 0 1.182.316 1.433.75a.499.499 0 10.865-.501C11.506 10.513 10.561 10 9.633 10a2.73 2.73 0 00-1.819.717c-.526.481-.815 1.114-.815 1.783v.5h-.5a.5.5 0 000 1h.5v2.5a.5.5 0 00.5.5h4a.5.5 0 000-1z"
  })));
}
LiniBagPound.propTypes = {
  size: PropTypes.number.isRequired
};