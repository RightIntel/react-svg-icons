import React from 'react';
import PropTypes from 'prop-types';
export default function LiniLineSpacing({
  size,
  ...props
}) {
  let className = 'Component Lini LiniLineSpacing';

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
    d: "M18.5 5h-10a.5.5 0 010-1h10a.5.5 0 010 1zM18.5 9h-10a.5.5 0 010-1h10a.5.5 0 010 1zM18.5 13h-10a.5.5 0 010-1h10a.5.5 0 010 1zM18.5 17h-10a.5.5 0 010-1h10a.5.5 0 010 1zM5.146 13.646L4 14.792V6.206l1.146 1.146a.498.498 0 00.708 0 .5.5 0 000-.707l-2-2a.5.5 0 00-.707 0l-2 2a.5.5 0 00.707.707L3 6.206v8.586l-1.146-1.146a.5.5 0 00-.707.707l2 2a.498.498 0 00.708 0l2-2a.5.5 0 00-.707-.707z"
  })));
}
LiniLineSpacing.propTypes = {
  size: PropTypes.number.isRequired
};