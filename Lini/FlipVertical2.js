import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFlipVertical2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFlipVertical2';

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
    d: "M1 .5a.502.502 0 01.5-.5h10a.498.498 0 01.407.79l-5 7a.5.5 0 01-.814 0l-5-7A.496.496 0 011 .499zm9.528.5H2.471l4.028 5.64L10.527 1zM1 18.5a.5.5 0 01.093-.291l5-7a.5.5 0 01.814 0l5 7a.5.5 0 01-.407.79h-10a.502.502 0 01-.5-.5zm5.5-6.14L2.472 18h8.057l-4.028-5.64zM10 9.5a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM7 9.5a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM4 9.5a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM1 9.5a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM19 17.5a.5.5 0 00-.5-.5h-2.652A10.49 10.49 0 0019 9.5a10.39 10.39 0 00-1.144-4.77 10.597 10.597 0 00-3.055-3.63.5.5 0 00-.6.799A9.426 9.426 0 0118 9.499a9.49 9.49 0 01-3 6.928v-2.928a.5.5 0 00-1 0v4a.5.5 0 00.5.5h4a.5.5 0 00.5-.5z"
  })));
}
LiniFlipVertical2.propTypes = {
  size: PropTypes.number.isRequired
};