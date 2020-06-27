import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSurveillance2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSurveillance2';

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
    d: "M9.5 16c-.827 0-1.5-.673-1.5-1.5S8.673 13 9.5 13s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 3h-16C.673 3 0 3.673 0 4.5v3c0 .652.418 1.208 1 1.414V9.5c0 2.27.884 4.405 2.49 6.01S7.23 18 9.5 18c2.27 0 4.405-.884 6.01-2.49S18 11.77 18 9.5v-.586c.582-.206 1-.762 1-1.414v-3c0-.827-.673-1.5-1.5-1.5zM7 16.571V14.5C7 13.122 8.122 12 9.5 12s2.5 1.122 2.5 2.5v2.071c-.782.277-1.624.429-2.5.429s-1.718-.152-2.5-.429zm6-.439V14.5c0-1.93-1.57-3.5-3.5-3.5S6 12.57 6 14.5v1.632A7.507 7.507 0 012 9.5V9h15v.5a7.508 7.508 0 01-4 6.632zM18 7.5a.5.5 0 01-.5.5h-16a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v3z"
  })));
}
LiniSurveillance2.propTypes = {
  size: PropTypes.number.isRequired
};