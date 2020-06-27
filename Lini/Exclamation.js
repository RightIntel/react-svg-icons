import React from 'react';
import PropTypes from 'prop-types';
export default function LiniExclamation({
  size,
  ...props
}) {
  let className = 'Component Lini LiniExclamation';

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
    d: "M9.5 17a.5.5 0 01-.5-.5v-15a.5.5 0 011 0v15a.5.5 0 01-.5.5zM9.5 20a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5z"
  })));
}
LiniExclamation.propTypes = {
  size: PropTypes.number.isRequired
};