import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMenu({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMenu';

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
    d: "M17.5 6h-15a.5.5 0 010-1h15a.5.5 0 010 1zM17.5 11h-15a.5.5 0 010-1h15a.5.5 0 010 1zM17.5 16h-15a.5.5 0 010-1h15a.5.5 0 010 1z"
  })));
}
LiniMenu.propTypes = {
  size: PropTypes.number.isRequired
};