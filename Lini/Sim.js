import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSim({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSim';

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
    d: "M15.5 20h-11c-.827 0-1.5-.673-1.5-1.5V7c0-.688.367-1.574.854-2.061L6.94 1.853c.487-.487 1.373-.854 2.061-.854h6.5c.827 0 1.5.673 1.5 1.5v16c0 .827-.673 1.5-1.5 1.5zM9 2c-.415 0-1.06.267-1.354.561L4.56 5.647c-.293.293-.561.939-.561 1.354v11.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5h-6.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 9H7c-1.103 0-2 .897-2 2v5c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2v-5c0-1.103-.897-2-2-2zm1 2v2h-2v-3h1c.551 0 1 .449 1 1zm-5 2v-3h2v3H9zm2 1v3H9v-3h2zm-4-4h1v3H6v-2c0-.551.449-1 1-1zm-1 6v-2h2v3H7c-.551 0-1-.449-1-1zm7 1h-1v-3h2v2c0 .551-.449 1-1 1z"
  })));
}
LiniSim.propTypes = {
  size: PropTypes.number.isRequired
};