import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPushpin2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPushpin2';

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
    d: "M14 4.5C14 2.019 11.981 0 9.5 0S5 2.019 5 4.5a4.509 4.509 0 003 4.243V19.5a.5.5 0 00.916.278l2-3a.498.498 0 00.084-.277V8.744a4.508 4.508 0 003-4.243zm-4 11.849l-1 1.5V8.972a4.583 4.583 0 001 0v7.377zM9.5 8C7.57 8 6 6.43 6 4.5S7.57 1 9.5 1 13 2.57 13 4.5 11.43 8 9.5 8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 5a.5.5 0 01-.5-.5C7 3.122 8.122 2 9.5 2a.5.5 0 010 1C8.673 3 8 3.673 8 4.5a.5.5 0 01-.5.5z"
  })));
}
LiniPushpin2.propTypes = {
  size: PropTypes.number.isRequired
};