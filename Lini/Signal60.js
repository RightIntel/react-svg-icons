import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSignal60({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSignal60';

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
    d: "M2.5 19h-2a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zM1 18h1v-2H1v2zM6.5 19h-2a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v5a.5.5 0 01-.5.5zM5 18h1v-4H5v4zM10.5 19h-2a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v8a.5.5 0 01-.5.5zM9 18h1v-7H9v7zM18.5 19h-2a.5.5 0 010-1h2a.5.5 0 010 1zM14.5 19h-2a.5.5 0 010-1h2a.5.5 0 010 1z"
  })));
}
LiniSignal60.propTypes = {
  size: PropTypes.number.isRequired
};