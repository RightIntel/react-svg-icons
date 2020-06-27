import React from 'react';
import PropTypes from 'prop-types';
export default function LiniExitUp({
  size,
  ...props
}) {
  let className = 'Component Lini LiniExitUp';

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
    d: "M15.5 20h-12c-.827 0-1.5-.673-1.5-1.5v-10C2 7.673 2.673 7 3.5 7h4a.5.5 0 010 1h-4a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-4a.5.5 0 010-1h4c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.853 3.646l-3-3a.5.5 0 00-.707 0l-3 3a.5.5 0 00.707.707L9 2.207V13.5a.5.5 0 001 0V2.207l2.147 2.146a.497.497 0 00.706 0 .5.5 0 000-.707z"
  })));
}
LiniExitUp.propTypes = {
  size: PropTypes.number.isRequired
};