import React from 'react';
import PropTypes from 'prop-types';
export default function LiniExpand2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniExpand2';

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
    d: "M19.5 0h-5a.5.5 0 000 1h3.793l-6.146 6.146a.5.5 0 00.706.707L19 1.707V5.5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5zM7.854 12.147a.5.5 0 00-.707 0l-6.146 6.146V14.5a.5.5 0 00-1 0v5a.5.5 0 00.5.5h5a.5.5 0 000-1H1.708l6.146-6.147a.5.5 0 000-.707z"
  })));
}
LiniExpand2.propTypes = {
  size: PropTypes.number.isRequired
};