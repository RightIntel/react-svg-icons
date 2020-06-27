import React from 'react';
import PropTypes from 'prop-types';
export default function LiniIndentIncrease({
  size,
  ...props
}) {
  let className = 'Component Lini LiniIndentIncrease';

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
    d: "M17.5 5h-15a.5.5 0 010-1h15a.5.5 0 010 1zM17.5 8h-8a.5.5 0 010-1h8a.5.5 0 010 1zM17.5 11h-8a.5.5 0 010-1h8a.5.5 0 010 1zM17.5 14h-8a.5.5 0 010-1h8a.5.5 0 010 1zM17.5 17h-15a.5.5 0 010-1h15a.5.5 0 010 1zM2.5 14a.5.5 0 01-.5-.5v-6a.5.5 0 01.8-.4l4 3a.5.5 0 010 .8l-4 3a.5.5 0 01-.3.1zM3 8.5v4l2.667-2L3 8.5z"
  })));
}
LiniIndentIncrease.propTypes = {
  size: PropTypes.number.isRequired
};